"use strict";

import welcome from "./welcome";

/*examples of import/export*/
import {func} from "./export";
import funcDefault from "./export";
import {ClassSimple} from "./export";
import ClassDefault from "./export";

console.log(func, 'func');
console.log(funcDefault, 'funcDefault');
console.log(ClassSimple, 'ClassSimple');
console.log(ClassDefault, 'ClassDefault');

/************************/


welcome("home");
