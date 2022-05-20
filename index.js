const core = require("@actions/core");
const fs = require("fs/promises");
const axios = require("axios");

const category = core.getInput("category") || "inspire";
const readme_path = core.getInput("readme_path") || "README.md";

(async () => {
  try {
    const { data } = await axios.get(`https://quotes.rest/qod?category=${category}`);

    let qotd = data.contents.quotes[0].quote;
    let quote = `<!-- start quote -->\n`;
        quote = quote.concat(`💬 Quote of the Day: "${qotd}"\n
    <!-- end quote -->`);

    const currentText = await fs.readFile(readme_path, "utf8");
    const quoteSection = /<!-- start quote -->[\s\S]*<!-- end quote -->/g;
    const newText = currentText.replace(quoteSection, quote);

    await fs.writeFile(readme_path, newText);
  } catch (error) {
    console.log(error.message);
  }
})();
