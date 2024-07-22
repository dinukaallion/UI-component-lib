import Typography from "@mui/material/Typography";

export const handleTypography = (
  content: string,
  type: string
): JSX.Element => {
  let response: JSX.Element;

  switch (type) {
    case "h1":
      response = <Typography variant="h1">{content}</Typography>;
      break;
    case "h2":
      response = <Typography variant="h2">{content}</Typography>;
      break;
    case "h3":
      response = <Typography variant="h3">{content}</Typography>;
      break;
    case "h4":
      response = <Typography variant="h4">{content}</Typography>;
      break;
    case "h5":
      response = <Typography variant="h5">{content}</Typography>;
      break;
    case "h6":
      response = <Typography variant="h6">{content}</Typography>;
      break;
    case "subtitle1":
      response = <Typography variant="subtitle1">{content}</Typography>;
      break;
    case "subtitle2":
      response = <Typography variant="subtitle2">{content}</Typography>;
      break;
    case "body2":
      response = <Typography variant="body2">{content}</Typography>;
      break;
    case "button":
      response = <Typography variant="button">{content}</Typography>;
      break;
    case "caption":
      response = <Typography variant="caption">{content}</Typography>;
      break;
    case "overline":
      response = <Typography variant="overline">{content}</Typography>;
      break;
    default:
      response = <p>{content}</p>;
      break;
  }

  return response;
};
