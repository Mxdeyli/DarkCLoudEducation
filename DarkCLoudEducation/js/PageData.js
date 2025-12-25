(window.onload = function() {
    window.knowledgeData = {
            web: {
                title: 'WEB安全',
                icon: '🌐',
                desc: 'Web应用安全漏洞与防护技术',
                subcategories: [
                    { id: 'xss', icon: '⚠️', title: 'XSS跨站脚本', desc: '跨站脚本攻击原理与防御' },
                    { id: 'sql', icon: '💉', title: 'SQL注入', desc: 'SQL注入攻击与防护' },
                    { id: 'csrf', icon: '🔄', title: 'CSRF跨站请求伪造', desc: 'CSRF攻击原理与防范' },
                    { id: 'upload', icon: '📤', title: '文件上传漏洞', desc: '文件上传漏洞利用与防护' },
                    { id: 'xxe', icon: '📄', title: 'XXE漏洞', desc: 'XML外部实体注入' },
                    { id: 'ssrf', icon: '🔗', title: 'SSRF服务端请求伪造', desc: 'SSRF漏洞原理与防御' },
                    { id: 'deserialization', icon: '🔓', title: '反序列化漏洞', desc: '反序列化攻击与防护' },
                    { id: 'rce', icon: '💻', title: '远程代码执行', desc: 'RCE漏洞利用与防范' }
                ]
            },
            pentest: {
                title: '渗透安全',
                icon: '🔍',
                desc: '渗透测试方法与实战技巧',
                subcategories: [
                    { id: 'info-gather', icon: '📊', title: '信息收集', desc: '目标信息收集与侦察' },
                    { id: 'scan', icon: '🔎', title: '漏洞扫描', desc: '漏洞扫描工具与技术' },
                    { id: 'exploit', icon: '💥', title: '漏洞利用', desc: '漏洞利用与提权' },
                    { id: 'post-exploit', icon: '🎯', title: '后渗透', desc: '后渗透攻击技术' },
                    { id: 'social', icon: '🎭', title: '社会工程学', desc: '社会工程学攻击方法' },
                    { id: 'wireless', icon: '📡', title: '无线安全', desc: '无线网络渗透测试' }
                ]
            },
            security: {
                title: '安全全貌',
                icon: '🛡️',
                desc: '网络安全知识体系全景',
                subcategories: [
                    { id: 'basics', icon: '📚', title: '安全基础', desc: '网络安全基础知识' },
                    { id: 'network', icon: '🌐', title: '网络安全', desc: '网络协议与安全' },
                    { id: 'system', icon: '💾', title: '系统安全', desc: '操作系统安全加固' },
                    { id: 'crypto', icon: '🔐', title: '密码学', desc: '加密算法与应用' },
                    { id: 'defense', icon: '🛡️', title: '安全防御', desc: '安全防护体系建设' },
                    { id: 'incident', icon: '🚨', title: '应急响应', desc: '安全事件应急处理' }
                ]
            },
            mitre: {
                title: 'MITRE ATT&CK',
                icon: '⚔️',
                desc: 'APT攻击技术框架',
                subcategories: [
                    { id: 'initial', icon: '🚪', title: '初始访问', desc: '获取初始立足点' },
                    { id: 'execution', icon: '▶️', title: '执行', desc: '恶意代码执行技术' },
                    { id: 'persistence', icon: '🔒', title: '持久化', desc: '维持访问权限' },
                    { id: 'privilege', icon: '👑', title: '权限提升', desc: '提升系统权限' },
                    { id: 'defense-evasion', icon: '👻', title: '防御规避', desc: '逃避检测技术' },
                    { id: 'lateral', icon: '↔️', title: '横向移动', desc: '内网横向渗透' }
                ]
            },
            dev: {
                title: '正向开发',
                icon: '💻',
                desc: '安全开发与编程技术',
                subcategories: [
                    { id: 'python', icon: '🐍', title: 'Python开发', desc: 'Python安全工具开发' },
                    { id: 'java', icon: '☕', title: 'Java开发', desc: 'Java安全编程' },
                    { id: 'web-dev', icon: '🌐', title: 'Web开发', desc: '安全的Web应用开发' },
                    { id: 'api', icon: '🔌', title: 'API开发', desc: 'RESTful API安全设计' },
                    { id: 'secure-code', icon: '🔒', title: '安全编码', desc: '安全编码规范' },
                    { id: 'tools', icon: '🛠️', title: '工具开发', desc: '安全工具开发实战' }
                ]
            },
            reverse: {
                title: '逆向分析',
                icon: '🔄',
                desc: '二进制逆向与分析',
                subcategories: [
                    { id: 'assembly', icon: '⚙️', title: '汇编语言', desc: 'x86/x64汇编基础' },
                    { id: 'debug', icon: '🐛', title: '调试技术', desc: '动态调试与分析' },
                    { id: 'malware', icon: '🦠', title: '恶意软件分析', desc: '恶意代码分析技术' },
                    { id: 'android', icon: '📱', title: 'Android逆向', desc: 'Android应用逆向' },
                    { id: 'ios', icon: '🍎', title: 'iOS逆向', desc: 'iOS应用逆向' },
                    { id: 'crack', icon: '🔓', title: '软件破解', desc: '软件保护与破解' }
                ]
            },
            ai: {
                title: 'AI安全',
                icon: '🤖',
                desc: '人工智能与机器学习安全',
                subcategories: [
                    { id: 'ml-basics', icon: '🧠', title: '机器学习基础', desc: '机器学习基础知识' },
                    { id: 'dl', icon: '🔬', title: '深度学习', desc: '深度学习与神经网络' },
                    { id: 'adversarial', icon: '⚔️', title: '对抗样本', desc: '对抗攻击与防御' },
                    { id: 'model-security', icon: '🛡️', title: '模型安全', desc: 'AI模型安全保护' },
                    { id: 'privacy', icon: '🔒', title: '隐私保护', desc: '联邦学习与差分隐私' },
                    { id: 'ai-pentest', icon: '🎯', title: 'AI渗透测试', desc: 'AI辅助安全测试' }
                ]
            },
            teaching: {
                title: '平台教学',
                icon: '🎓',
                desc: '学习平台与实验环境',
                subcategories: [
                    { id: 'hackthebox', icon: '📦', title: 'HackTheBox', desc: 'HTB渗透测试平台' },
                    { id: 'tryhackme', icon: '🎮', title: 'TryHackMe', desc: 'THM学习平台' },
                    { id: 'vulnhub', icon: '💣', title: 'VulnHub', desc: '漏洞靶机实验' },
                    { id: 'dvwa', icon: '🎯', title: 'DVWA', desc: 'Web漏洞练习平台' },
                    { id: 'ctf', icon: '🚩', title: 'CTF竞赛', desc: 'CTF夺旗赛解题' },
                    { id: 'lab', icon: '🔬', title: '实验环境搭建', desc: '本地靶场环境搭建' }
                ]
            },
            vlog: {
                title: 'VLOG',
                icon: '🎬',
                desc: '学习方法与职业规划',
                subcategories: [
                    { id: 'method', icon: '📖', title: '学习方法', desc: '高效学习技巧' },
                    { id: 'roadmap', icon: '🗺️', title: '学习路线', desc: '网络安全学习路径' },
                    { id: 'career', icon: '💼', title: '职业发展', desc: '安全职业规划' },
                    { id: 'tools-usage', icon: '🔧', title: '工具使用', desc: '安全工具实战' },
                    { id: 'mindset', icon: '💭', title: '思维方式', desc: '安全思维培养' },
                    { id: 'experience', icon: '⭐', title: '经验分享', desc: '实战经验总结' }
                ]
            },
            binary: {
                title: '抵制八股',
                icon: '🎯',
                desc: '实战能力培养',
                subcategories: [
                    { id: 'practice', icon: '💪', title: '实战练习', desc: '真实场景实战' },
                    { id: 'project', icon: '🎨', title: '项目实战', desc: '完整项目实战' },
                    { id: 'case', icon: '📝', title: '案例分析', desc: '真实案例剖析' },
                    { id: 'thinking', icon: '🧩', title: '思维训练', desc: '问题解决能力' }
                ]
            },
            live: {
                title: '直播答疑',
                icon: '📺',
                desc: '在线直播与答疑',
                subcategories: [
                    { id: 'live-record', icon: '🎥', title: '直播回放', desc: '往期直播回放' },
                    { id: 'qa', icon: '❓', title: '常见问题', desc: '常见问题解答' },
                    { id: 'discussion', icon: '💬', title: '讨论交流', desc: '技术讨论区' }
                ]
            },
            courses: {
                title: '付费课程',
                icon: '💰',
                desc: '专业培训课程',
                subcategories: [
                    { id: 'basic-course', icon: '📚', title: '基础课程', desc: '零基础入门课程' },
                    { id: 'advanced-course', icon: '🚀', title: '进阶课程', desc: '高级技术课程' },
                    { id: 'vip', icon: '👑', title: 'VIP服务', desc: '一对一辅导服务' },
                    { id: 'cert', icon: '🏆', title: '认证考试', desc: '安全认证培训' }
                ]
            }
        };
        function showCategory(category) {
            if (!knowledgeData[category]) return;
            window.location.href = "Category.aspx?category="+encodeURIComponent(category);
        }

        function toggleAnnouncement() {
            const bar = document.getElementById('announcementBar');
            bar.classList.toggle('collapsed');
        }

        window.addEventListener('scroll', function() {
            const announcementBar = document.getElementById('announcementBar');
            if (announcementBar) {
                if (window.scrollY > 100) {
                    announcementBar.style.top = '20px';
                } else {
                    announcementBar.style.top = '100px';
                }
            }
        });
        window.showCategory = showCategory;
        window.toggleAnnouncement = toggleAnnouncement;
})();