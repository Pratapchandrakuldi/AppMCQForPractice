import { javaOops } from "./java/oops";
import { javaDsa } from "./java/dsa";
import { javaJspOops } from "./java/jspOops";
import {sqlBasics} from "./sql/basics";
import { sqlDql } from "./sql/dql";
import { sqlDml } from "./sql/dml";
import { jsBasics } from "./javascript/basics";
import { jsDom } from "./javascript/dom";
import { htmlBasics } from "./html/basics";
import { cssBasics } from "./css/basics";
import { htmlAttributesMcq } from "./html/attributes";
import { htmlTagsMcq } from "./html/tags";
import { cssFlexGridMcq } from "./css/flex_grid";




export const questionsMap = {
  java: {
    jspOops: javaJspOops,
    oops: javaOops,
    dsa: javaDsa,
  },
  sql: {
    basics: sqlBasics,
    dql: sqlDql,
    dml: sqlDml,
  },
  javascript: {
    basics: jsBasics,
    dom: jsDom,
  },
  html: {
    basics: htmlBasics,
    attributes: htmlAttributesMcq,
    tags: htmlTagsMcq,
  },
  css: {
    basics: cssBasics,
    flex_grid: cssFlexGridMcq,
  },
};
