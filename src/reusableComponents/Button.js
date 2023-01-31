const Button = ({name, width, height, borderTopLeft, borderBottomLeft,borderBottomRight, 
  borderTopRight, color, bgColor, border}) => {
  return(
    <button style={{
      width:width, 
      height:height,
      borderBottomLeftRadius: borderBottomLeft,
      borderBottomRightRadius: borderBottomRight,
      borderTopRightRadius: borderTopRight,
      borderTopLeftRadius: borderTopLeft, 
      color:color, 
      backgroundColor: bgColor, 
      border:border}}>
        {name}
        </button>
  );
}
export default Button;