const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();
// Your mongodb uri
// Step 1 : 
const uri = process.env.URI;

// Setup your mongodb uri
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(cors());
const port = 8080 || 8088 || 3000 || 3030;
// create application/json parser
const jsonParser = bodyParser.json();

async function run() {
  try {
    // Create references to the database and collection in order to run
    // operations on them.
    const client = new MongoClient(uri);

    // Connect the client to the server	(optional starting in v4.7)
    await client
      .connect()
      .catch((err) => console.error("Connection error : ", err));

    console.log("Database connection established 🧑‍💻...");
    // Step 2 : 
    const yourDBName = 'backend' // please give your database name here
    const db = await client.db(yourDBName)
    // const [service, setService,catagory,setCatagory] = useContext(StateContext);
    // Step 3 : 
    const doctorsCollection = await db.collection("doctors") // Give your table / collection name
    const usersCollection = await db.collection("users") 
    const appoinmentsCollection = await db.collection("appoinments") 
    // const catagoryCollection=await db.collection("Orthopedics")
    // const productCollection = await db.collection("yourProductCollectionName") // Give your table / collection name
    // ... so on if there is more collection
    app.get("/", (req, res) => {
      res.send("Your backend is start working 🧑‍💻...");
    });
    //  users crud operations [admin - client ]
    app.get("/users", async (req, res) => {
      const users = await usersCollection.find().toArray();
      res.json({ users: users, status: 'ok', code: 200 });
    });
    // users registration
    app.post("/users", jsonParser, async (req, res) => {
      const usersCollection = await db.collection("users")
      await usersCollection.insertOne(req.body);
      res.json({ users: req.body, status: 'ok', code: 200 });
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id
      const usersCollection = await db.collection("users")
      const users = await usersCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id
      const usersCollection = await db.collection("users")
      const users = await usersCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });

    app.post("/admin/validation", jsonParser, async (req, res) => {
      const data = req.body
      const userCollection = await db.collection("admin")
      const users = await userCollection.findOne({ "email": data.email, "password": data.password });
      if (users) {
        res.json({ users: users, status: 'ok', code: 200 });
      } else {
        res.json({ users: [], status: 'failure', code: 404 });
      }
    });
    app.get("/", (req, res) => {
      res.send("Your backend is start working 🧑‍💻...");
    });
    //  users crud operations [admin - client ]
    app.get("/doctors", async (req, res) => {
      const doctors = await doctorsCollection.find().toArray();
      res.json({ doctors: doctors, status: 'ok', code: 200 });
    });
    // app.get("/Psychology", async (req, res) => {
    //   const doctorsCollection = await db.collection("Psychology")
    //   const doctors = await doctorsCollection.find().toArray();
    //   res.json({ doctors: doctors, status: 'ok', code: 200 });
    // });
    // users registration
    app.post("/doctors", jsonParser, async (req, res) => {
      const doctorsCollection = await db.collection("doctors")
      await doctorsCollection.insertOne(req.body);
      res.json({ doctors: req.body, status: 'ok', code: 200 });
    });

    app.get("/doctors/:id", async (req, res) => {
      const id = req.params.id
      const doctorsCollection = await db.collection("doctors")
      const doctors = await doctorsCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ doctors: doctors, status: 'ok', code: 200 });
    });

    app.delete("/doctors/:id", async (req, res) => {
      const id = req.params.id
      const doctorsCollection = await db.collection("doctors")
      const doctors = await doctorsCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ doctors: doctors, status: 'ok', code: 200 });
    });

    app.get("/catagory/:specilities", async (req, res) => {
      const specilitie=req.params.specilities
      const doctorsCollection = await db.collection(specilitie)
      const doctors = await doctorsCollection.find(req.body).toArray();
      res.json({ doctors: doctors, status: 'ok', code: 200 });
    });
    app.post("/catagory/:specilities", jsonParser, async (req, res) => {
      const catagory=req.params.specilities
      const catagoryCollection = await db.collection(catagory)
      await catagoryCollection.insertOne(req.body);
      res.json({ specilities: req.body, status: 'ok', code: 200 });
    });
    app.get("/appoinments", async (req, res) => {
      const appoinments = await appoinmentsCollection.find().toArray();
      res.json({ appoinments: appoinments, status: 'ok', code: 200 });
    });

    app.post("/appoinments", jsonParser, async (req, res) => {
      const appoinmentsCollection = await db.collection("appoinments")
      await appoinmentsCollection.insertOne(req.body);
      res.json({ appoinments: req.body, status: 'ok', code: 200 });
    });
    app.get("/admin/appoinment", jsonParser, async (req, res) => {
      const appoinments = await appoinmentsCollection.find().toArray();
      res.json({ appoinments: appoinments, status: 'ok', code: 200 });
    });

    app.patch("/admin/appoinment/confirm", jsonParser, async (req, res) => {
      // console.log(req.body)
      // const { _id } = req.body
      const appoinmentsCollection = await db.collection("appoinment")
      console.log(req.body)
      appoinmentsCollection.updateOne({orderId: req.body.id}, {
        $set :{status : req.body.status}
      })
    });

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log('Ports are running on :', port);
});
