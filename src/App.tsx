import { Button } from "./ui";

const App = () => {
  const onClick = (variant: string) => {
    // выводим сообщение в консоль инструментов разработчика в браузере
    console.log(`${variant} button clicked`);
  };

  return (
    <>
      {/* дефолтная кнопка */}
      <Button
        onClick={() => onClick("primary")}
        isDisabled={false}
      >
        primary
      </Button>

      {/* small */}
      <Button
        size="small"
        onClick={() => onClick("primary")}
        isDisabled={false}
      >
        small
      </Button>

      {/* large */}
      <Button
        size="large"
        onClick={() => onClick("primary")}
        isDisabled={false}
      >
        large
      </Button>

      {/* заблокированная кнопка */}
      <Button
        onClick={() => onClick("disabled")}
        isDisabled={true}
      >
        disabled
      </Button>

      {/* успех */}
      <Button
        variant='success'
        onClick={() => onClick('success')}
        isDisabled={false}
      >
        success
      </Button>

      {/* опасность */}
      <Button
        variant='error'
        onClick={() => onClick('error')}
        isDisabled={false}
      >
        error
      </Button>
    </>
  );
}

export default App;
