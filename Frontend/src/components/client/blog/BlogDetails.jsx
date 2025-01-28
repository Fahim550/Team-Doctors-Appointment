import { useContext, useState } from "react";
import { StateContext } from "../../../App";
import Layout from "../layout/Layout";
export default function BlogDetails() {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useContext(StateContext);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/Blog"); // Replace with your API URL
  //       const data = await response.json(); // Parse the JSON data from the response
  //       setBlogs(data); // Set the fetched data into the blogs state
  //     } catch (error) {
  //       console.error("Error fetching blogs:", error);
  //     }
  //   };
  //   fetchBlogs();
  // }, []);
  // console.log("", blogs?.blog);

  // Highlight important text in blog details
  const highlightImportantText = (content) => {
    if (!content) return ""; // Return an empty string if content is undefined or null
    const keywords = [
      "ইফতারে কি কি খাবেন?",
      "সাহরিতে কি খাবেন?",
      "বিশুদ্ধ পানি পান করাই ভালো।",
      "কমলা লেবু  খাওয়ার অসুবিধে",
      "কমলা লেবু  খাওয়ার অসুবিধে",
      "১. রক্তে শর্করার মাত্রা নিয়ন্ত্রণে থাকে",
      "২. হার্ট ভাল থাকে",
      "৩. পুষ্টির ভাণ্ডার",
      "৪. শরীরের বিষ বের করে দেয়",
      "৫. অ্যাসিড দূর করে",
      "৬. শরীরের কর্মক্ষমতা বাড়ে",
      "৭. রোগ প্রতিরোধক ক্ষমতা বাড়ে",
      "৮. ওজন কমে",
      "৯. পেটের রোগ কমে",
      "একটি আদর্শ ইফতারির প্লেট",
      "ইফতারে কী খাবেন",
      "রাতের খাবার",
      "সাহরির খাবার",
      "পানি খাওয়ার নিয়ম",
    ];

    // Wrap keywords with <strong> tags
    keywords.forEach((word) => {
      const regex = new RegExp(word, "g"); // Match all occurrences of the word
      content = content.replace(regex, `<br/><strong>${word}</strong> <br/>`);
    });

    return content;
  };

  return (
    <div>
      <Layout>
        <div className="w-10/12 mx-auto rounded-lg shadow-lg px-8 pt-8">
         
          <div>
            {blog
              ? (() => {
                  const processedContent = highlightImportantText(blog?.details || "");
                  return (
                    <div
                      key={blog.id}
                      className="border-b border-gray-300 pb-4 mb-4 [&>*]:py-2"
                    >
                      <h2 className="text-xl font-semibold text-gray-800">{blog.name}</h2>
                      <img
                        src={blog.image}
                        alt={blog.name}
                        className="w-full h-auto mb-2 rounded-xl"
                      />
                      <p
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{ __html: processedContent }}
                      />
                    </div>
                  );
                })()
              : ""}
          </div>
        </div>
      </Layout>
    </div>
  );
}
