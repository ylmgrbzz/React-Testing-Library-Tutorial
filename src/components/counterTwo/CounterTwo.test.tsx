import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
  test("should render CounterTwo", () => {
    render(<CounterTwo count={0} />);
    const counterTwo = screen.getByText(/Counter Two/i);
    expect(counterTwo).toBeInTheDocument();
  });
});

// İkinci test ise describe bloğu dışında yer alıyor ve handleIncrement ve handleDecrement adlı olay işleyicilerinin ilgili düğmeler tıklandığında doğru bir şekilde
//  çağrılıp çağrılmadığını test ediyor.Bu işlem için jest.fn() kullanarak bu işleyiciler için sahte fonksiyonlar oluşturuyor, bu sahte işleyicilerle birlikte
//   CounterTwo bileşenini render ediyor, "Artır" ve "Azalt" olarak etiketlenmiş düğmeleri screen.getByRole() kullanarak buluyor,
//     bu düğmelere user.click() kullanarak tıklama simulasyonu gerçekleştiriyor ve son olarak her bir işleyicinin tam olarak bir kez çağrılıp
//     çağrılmadığını toHaveBeenCalledTimes(1) kullanarak kontrol ediyor.

test("handlers are called", () => {
  // create mock functions
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  render(
    <CounterTwo
      count={0}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });
  user.click(incrementButton);
  user.click(decrementButton);
  expect(handleIncrement).toHaveBeenCalledTimes(1);
  expect(handleDecrement).toHaveBeenCalledTimes(1);
});
