
const SignInButton = ({ isSignedIn }: { isSignedIn: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <button onClick={isSignedIn} className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-bold text-xs p-2 rounded-md items-center justify-center">
        Sign In
      </button>
    </div>
  );
};

export default SignInButton;
