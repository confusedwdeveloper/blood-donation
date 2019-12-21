import React from "react";
import Button from "react-bootstrap/Button";

export default function CustomButton({ children, variant, ...otherProps }) {
  const color = variant === "secondary" ? "#fffffe" : "#00214d";
  return (
    <Button variant={variant} style={{ color }} {...otherProps}>
      {children}
    </Button>
  );
}
