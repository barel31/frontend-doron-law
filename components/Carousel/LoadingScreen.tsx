type LoadingScreenProps = {
  loadedCount: number;
  totalCount: number;
};

const LoadingScreen = ({ loadedCount, totalCount }: LoadingScreenProps) => (
  <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p>
        Loading Images ({loadedCount}/{totalCount})
      </p>
    </div>
  </div>
);

export default LoadingScreen;
