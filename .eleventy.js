export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("CNAME");
};