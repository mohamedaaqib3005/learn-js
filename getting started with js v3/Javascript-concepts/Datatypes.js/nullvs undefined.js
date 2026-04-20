const nullOrUndefined = () => {
  const time = 0

  if (!time) {
    console.log("!time", !time);
  }
  if (time) {
    return;
  }

}

console.log(nullOrUndefined())