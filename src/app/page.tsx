import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './components/Post';

export default function Home() {
  const posts = [
    {
      author: {
        name: 'Nguyễn Văn A',
        avatar: '/avatar1.jpg'
      },
      content: 'Hôm nay là một ngày đẹp trời!',
      image: '/post1.jpg',
      likes: 120,
      comments: 15,
      shares: 5
    },
    {
      author: {
        name: 'Trần Thị B',
        avatar: '/avatar2.jpg'
      },
      content: 'Chia sẻ khoảnh khắc đáng nhớ của tôi',
      likes: 85,
      comments: 8,
      shares: 3
    }
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 ml-64 p-4">
          {/* Create Post */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <input
                type="text"
                placeholder="Bạn đang nghĩ gì?"
                className="flex-1 bg-gray-100 rounded-full py-2 px-4 focus:outline-none"
              />
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t">
              <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <span>Ảnh/Video</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                </svg>
                <span>Cảm xúc/Hoạt động</span>
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
