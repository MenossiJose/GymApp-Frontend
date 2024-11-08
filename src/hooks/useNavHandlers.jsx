import { useRouter } from 'expo-router';

const useNavHandlers = () => {
  const router = useRouter();

  const handleProfile = () => {
    router.replace("/home");
  };

  const handleDumbbell = () => {
    router.replace("/workouts");
  };

  return { handleProfile, handleDumbbell };
};

export default useNavHandlers;
