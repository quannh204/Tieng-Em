# Quản lý trung tâm tiếng Em

### Requirements
Đầu tiên là cần cài NVM, NPM. Máy tôi đang cài sẵn NVM, NPM rồi nên để anh em làm việc thống nhất 1 version thì anh em cài 
**NVM version 1.1.12** và **NPM version 11.2.0**. Cài nvm trước rồi mới cài được NPM.
cài NVM ở [đây](https://github.com/coreybutler/nvm-windows). Nhớ chọn đúng version 1.1.12. Sau đấy làm theo các bước dưới:

### Installation
1. **Install NPM**  
   ```bash
   nvm install 11.2.0
   nvm use 11.2.0
   ```
2. **Clone repo**  
   ```bash
   git clone https://github.com/LyMuc/Tieng-Em.git
   ```
3. **Cài đặt tất cả mọi thứ cần thiết**  
   cd đến thư mục chứa prj  
   ```bash
   npm install
   ```
4. **Tạo file .env**  
   Nội dung file sẽ được tôi ném lên fb, anh em chỉ cần nhớ đặt tên file là .env và **để nó nằm trong thư mục chính của prj**. File này không ném lên Github được vì AWS tét đít.

5. **Connect với database của AWS mà tôi đã cấu hình**
   Mở psql lên, chạy cái này:
   ```bash
   psql -h <host_endpoint> -p <port> -U <username> -d <database_name>
   ```
   Thông tin các trường thì chính là cái file .env tôi ném qua fb. Anh em nào dùng PgAdmin thì vào mục Connection Tab rồi điền thông tin các trường.

5. **Chạy thử**  
   Chạy xong 2 cái dưới đây rồi anh em nhấn vào cái link localhost:8080 mà hiện ra 1 cái "dropdown from here" bấm bấm được là ôke.
   ```bash
   npx webpack
   npx webpack serve
   ```
   Chạy xong cái dưới đây rồi mà nó hiện lên thông báo ở terminal là connected to database at: .... gì đó thì thành công gòi. 
   ```bash
   node app.js
   ```






