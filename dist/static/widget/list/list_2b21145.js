define("widget/list/list",function(t,r,a){var e=t("components/vue/vue"),i=t("widget/mock/service"),n=t("widget/filter/datetime");a.exports=e.component("c-list",{template:'\r\n<div id="list-container">\r\n\r\n    <!-- 文章分类 -->\r\n    <c-category :show-oading="showLoading" :type="type" :cates="cates"></c-category>\r\n    \r\n    <!-- 文章列表 -->\r\n    <ul class="article-list top-notes">\r\n        <li v-for="art in articles" :class="{\'have-img\':art.wrap_img}">\r\n            <!-- 文章封面 -->\r\n            <a v-if="art.wrap_img" class="wrap-img" href="#p/{{ art.article_id }}">\r\n                <img :src = "art.wrap_img" alt="300">\r\n            </a>\r\n            <div>\r\n                <p class="list-top">\r\n                    <a class="author-name blue-link" href="#users/{{ art.author_id }}">\r\n                        {{ art.author }}\r\n                    </a>\r\n                    <em>\r\n                        ·\r\n                    </em>\r\n                    <span class="time">\r\n                        {{ art.timestamp | datetime }}\r\n                    </span>\r\n                </p>\r\n                <h4 class="title">\r\n                    <a  href="#p/{{ art.article_id }}">\r\n                        {{ art.title }}\r\n                    </a>\r\n                </h4>\r\n                <a class="avatar maleskine-author" href="#users/{{ art.author_id }}">\r\n                    <img :src = "art.avatar">\r\n                </a>\r\n                <div class="list-footer">\r\n                    <a  href="#p/{{ art.article_id }}">\r\n                        阅读 {{ art.read }}\r\n                    </a>\r\n                    <a  href="#p/{{ art.article_id }}">\r\n                        · 评论 {{ art.comment }}\r\n                    </a>\r\n                    · 喜欢 {{ art.like }}\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>',props:["cate","type"],data:function(){return{cates:[],articles:[]}},events:{"cate-change":function(t){for(var r=t.cate,a=t.type,e=this.cates,i=0;i<e.length;i++)e[i].active=r==e[i].id;this.getArticleList(a,r)},"type-change":function(t){this.getCateList(t.type,t.cate)},"search-change":function(t){this.searchArticles(t)}},filters:{datetime:n},methods:{getCateList:function(t,r){for(var a={hot:[{id:"now",name:"当前热门"},{id:"weekly",name:"七日热门"},{id:"mouthly",name:"三十日热门"}],notes:[{id:"all",name:"全部"},{id:"13",name:"市集"},{id:"14",name:"生活家"},{id:"15",name:"世间事"}]},e=a[t]||[],i=0;i<e.length;i++)e[i].active=e[i].id==r;this.cates=e},getArticleList:function(t,r){var a=this;i.getArticleList(t,r,function(t){a.$data.articles=t})},searchArticles:function(t){var r=this;i.searchArticles(t,function(t){r.$data.articles=t})}}})});