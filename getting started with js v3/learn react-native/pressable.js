function Pressable({ style }) {
  let isPressed = false;

  // when user touches
  isPressed = true;
  style({ pressed: true });

  // when user releases
  isPressed = false;
  style({ pressed: false });
}