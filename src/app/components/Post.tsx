import Image from 'next/image';

interface PostProps {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const Post = ({ author, content, image, likes, comments, shares }: PostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {/* Post Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div>
          <h3 className="font-semibold">{author.name}</h3>
          <p className="text-sm text-gray-500">2 giờ trước</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="mb-4">{content}</p>
      {image && (
        <div className="relative w-full h-96 mb-4">
          <Image
            src={image}
            alt="Post image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Post Stats */}
      <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          <span>{likes}</span>
        </div>
        <div className="flex space-x-4">
          <span>{comments} bình luận</span>
          <span>{shares} lượt chia sẻ</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex border-t pt-2">
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>Thích</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Bình luận</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span>Chia sẻ</span>
        </button>
      </div>
    </div>
  );
};

export default Post; 