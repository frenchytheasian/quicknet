const cleanData = (input) => {
    const splitData = input.split("}{");
    const newList = splitData.map((item, ind) => {
      if (item.length === 0) {
        return "";
      }
      if (ind === 0) {
        return JSON.parse(item + "}");
      } else if (ind === splitData.length - 1) {
        return JSON.parse("{" + item);
      } else {
        return JSON.parse("{" + item + "}");
      }
    });
    return newList;
  };

export {cleanData}