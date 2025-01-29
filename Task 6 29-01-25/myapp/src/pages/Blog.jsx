import React from "react";

const Blog = () => {
  // Sample Blog Data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      image: "https://avinyaweb.com/wp-content/uploads/2023/05/reactjs-basics.jpg"  ,
    },
    {
      id: 2,
      title: "Mastering JavaScript ES6",
      image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2019/07/9608c9ff.png",
    },
    {
      id: 3,
      title: "Understanding Tailwind CSS",
      image: "https://www.dongee.com/tutoriales/content/images/2023/10/image-7.png",
    },
    
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
