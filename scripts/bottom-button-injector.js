hexo.extend.injector.register('body_end', function () {

    // 点赞按钮变量,解包操作
    const {
        like_btn_icon,
        like_hover_btn_icon,
        like_btn_text,
        like_btn_enable,
        serverUrl
    } = hexo.config.bottom_btn.like_btn || {};

    const enable = hexo.config.bottom_btn.enable

    if (!enable) {
        return null;
    }


    // 点赞按钮
    const likeButtonScript = like_btn_enable
        ? `<script src="/js/like-button.js"></script>
        <script>
            new LikeButton({
                btnIcon: "${like_btn_icon}",
                btnHoverIcon: "${like_hover_btn_icon}",
                btnText: "${like_btn_text}",
                serverURL:"${serverUrl}"
            }).init();
        </script>`
        : "";

    return `
    <link defer rel="stylesheet" href="/css/ButtomBtn.css"/>
    ${rewardButtonScript}
    ${likeButtonScript}
    `;

}, "post");