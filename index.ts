const MyFunctionnalComponent: React.FC = props => {
  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      await loadContent();
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);
return <div></div>;
};
