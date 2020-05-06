export function delParantheses(text) {
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);

    if (c == "(") {
      text = text.substring(0, i) + "" + text.substring(i + 1, text.length);
    }
    if (c == ")") {
      text = text.substring(0, i) + "" + text.substring(i + 1, text.length);
    }
  }
  return text;
}

export function convertPol(text) {
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    if (c == "ń") {
      text = text.substring(0, i) + "n" + text.substring(i + 1, text.length);
    }
    if (c == "ł") {
      text = text.substring(0, i) + "l" + text.substring(i + 1, text.length);
    }
    if (c == "ż" || c == "ź") {
      text = text.substring(0, i) + "z" + text.substring(i + 1, text.length);
    }
    if (c == "ó") {
      text = text.substring(0, i) + "o" + text.substring(i + 1, text.length);
    }
    if (c == "ą") {
      text = text.substring(0, i) + "a" + text.substring(i + 1, text.length);
    }
    if (c == "ę") {
      text = text.substring(0, i) + "e" + text.substring(i + 1, text.length);
    }
    if (c == "ć") {
      text = text.substring(0, i) + "c" + text.substring(i + 1, text.length);
    }
    if (c == "ś") {
      text = text.substring(0, i) + "s" + text.substring(i + 1, text.length);
    }
  }
  return text;
}

export function convertCategory(category) {
  category = delParantheses(category);
  category = convertPol(category);
  category = category
    .split(/[\s/]+/)
    .join("-")
    .toLowerCase();

  return category;
}

export function generateHref(items, item_index) {
  for (var i = 0; i < items.length; i++) {
    items[i] = convertPol(delParantheses(items[i]))
      .split(/[\s/]+/)
      .join(" ");
  }
  var Href = "";
  for (var i = 0; i < item_index + 1; i++) {
    Href = Href + "/" + items[i].split(" ").join("-").toLowerCase();
  }
  return Href;
}

export function Compress(text, len) {
  var words = text.split(" ");
  if (words.length > len) {
    words = words.slice(0, len);
  }
  return words.join(" ");
}

export function CompressLink(text, len) {
  var words = text.replace(/,/g, "").split(" ");
  if (words.length > len) {
    words = words.slice(0, len);
  }
  return words.join("-");
}
