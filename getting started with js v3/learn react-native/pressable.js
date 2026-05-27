function Pressable({ style }) {
  let isPressed = false;

  // when user touches
  isPressed = true;
  style({ pressed: true });

  // when user releases
  isPressed = false;
  style({ pressed: false });
}


style = {(state) => {
  const pressed = state.pressed;

  return [
    styles.button,
    pressed && styles.active,
  ];
}}

User touches screen
        ↓
Pressable detects touch
        ↓
Pressable creates object → { pressed: true }
        ↓
Pressable calls YOUR style function
        ↓
You return styles
        ↓
UI updates