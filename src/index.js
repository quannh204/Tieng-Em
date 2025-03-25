//Đây được gọi là file js chính phía client-side (frontend), ở đây import Bootstrap 1 lần duy nhất 
// và không cần phải import từ bất cứ đâu nữa.

import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap css

// Import bootstrap JS, AI bảo thế, có gì các ông 
//frontend học thêm thì confirm hộ tôi!
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

//Cái này chỉ là ví dụ tôi làm với 1 cái dropdown menu
//để mọi người hiểu chuyện gì đang xảy ra, sau làm thì xóa nó đi.
import { dropController } from "./dropdown-control"; 

//Nhúng thẳng CSS vào JS, đây sẽ là cách mình làm chứ không phải sử dụng thẻ <href> để link đến file CSS 
// hoặc thẻ <script> để link đến file JS vì mình đang dùng Webpack ^^!
import "./static/css/styles.css";

//Code mấy dòng dưới này khá bẩn, vẫn chỉ để minh họa cái dropdown menu, frontend làm thì xóa đi.
const dropContent = document.querySelector("#dropdown-content");
const dropBox = document.querySelector("#dropdown-box");
dropController(dropBox, dropContent);

