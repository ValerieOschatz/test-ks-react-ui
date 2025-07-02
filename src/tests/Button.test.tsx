import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from '../ui';

const onClick = vi.fn();

describe('Button', () => {
  describe("onClick", () => {
    it("is not called", () => {
      render(
        <Button
          isDisabled={false}
        >
          button
        </Button>
      );
      
      const button = screen.getByTestId('button');
      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
    })

    it("is not called, disabled", () => {
      render(
        <Button
          onClick={onClick}
          isDisabled={true}
        >
          button
        </Button>
      );
      
      const button = screen.getByTestId('button');
      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
    })

    it("is called", () => {
      render(
        <Button
          onClick={onClick}
          isDisabled={false}
        >
          button
        </Button>
      );
      
      const button = screen.getByTestId('button');
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    })
  })

  describe("isDisabled", () => {
    it("true", () => {
      render(
        <Button
          isDisabled={true}
        >
          button
        </Button>
      );
      
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('disabled');
    })

    it("false", () => {
      render(
        <Button
          isDisabled={false}
        >
          button
        </Button>
      );
      
      const button = screen.getByTestId('button');
      expect(button).not.toHaveAttribute('disabled');
    })
  })
})
