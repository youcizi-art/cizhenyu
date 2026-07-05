import{H as U}from"./hono.DWYJ0TmM.js";import{c as F}from"./index.z3FpvoyB.js";globalThis.process??={};globalThis.process.env??={};function A(e,t){return(Array.isArray(e)?e:[]).find(a=>t.test(String(a?.sourceModel||"")))||null}function K(e,t){if((t?.dataMode==="real"?"real":"mock")!=="real")return e;const s=A(t?.sampleRecords,/product|goods|item|commodity|prod/i),r=A(t?.sampleRecords,/category|classify|catalog|type/i),o=Array.isArray(r?.items)?r.items.map(u=>String(u?.title||u?.name||u?.description||"").trim()).filter(Boolean):[],i=Array.isArray(s?.items)?s.items.slice(0,3).map((u,m)=>{const c=String(u?.title||u?.name||`真实产品 ${m+1}`).trim(),p=String(u?.image||u?.cover||"").trim(),g=String(u?.relation||"").trim(),d=String(u?.description||"").trim(),h=String(u?.price||"").trim();return{name:c||`真实产品 ${m+1}`,specs:[d,h?`价格: ${h}`:"",g?`分类: ${g}`:""].filter(Boolean).join(" | ")||"已接入真实记录样本",image:p&&/^https?:\/\//i.test(p)?p:e.products[m%e.products.length]?.image||e.products[0].image,tag:g||o[m]||"真实记录"}}):[];if(i.length===0)return{...e,slogan:`${e.slogan} 当前预览已切换到真实字段模式。`,description:`${e.description} 当前页面已接入真实字段契约，但系统内暂未采样到可用实体记录，预览仍保留 Mock 内容兜底。`};const n=Number(s?.total||i.length),l=Number(r?.total||o.length);return{...e,slogan:`当前站点已接入 ${n} 条真实产品数据，正在按真实字段契约生成预览`,description:`当前页面已切换到真实字段模式，已采样 ${n} 条产品记录${l?` 与 ${l} 条分类记录`:""}，下方模块优先展示系统真实实体数据。`,products:i,features:[{title:"真实字段映射",desc:"当前页面已按系统实体字段自动完成标题、图片、描述、价格等字段绑定。",icon:"🔗"},{title:"真实记录采样",desc:`已注入 ${n} 条最新实体记录作为页面预览样本。`,icon:"📦"},{title:"后续可继续扩展",desc:"下一步可继续接入分页、分类筛选和更多真实模块。",icon:"🚀"}]}}const z={bearing:{companyName:"钛睿精密轴承工业 (Triton Precision Bearings)",slogan:"极端工况下的坚贞运转，让世界感知精密的力量",description:"钛睿精密轴承（Triton Precision）致力于超高速、耐腐蚀、高承载的特种陶瓷与合金轴承研发。为全球航天航空、精密机床、风力发电等大奢工业场景提供零缺陷的旋转自愈控制系统。",features:[{title:"纳米陶瓷自润滑",desc:"采用氮化硅特种陶瓷滚珠，在无润滑油极端状态下寿命提升400%。",icon:"💎"},{title:"P2级超高精密级精度",desc:"全线产品达到国家标准P2级（ISO Class 2）精度控制，径向跳动小于1.5微米。",icon:"📐"},{title:"零温升高速锁固",desc:"专利热应力消除保持架设计，在每分钟数万转高速下温升几乎为零。",icon:"⚡"}],products:[{name:"TR-9020 特种超精密主轴陶瓷轴承",specs:"内径100mm | 极限转速38,000rpm | 陶瓷混合滚珠",image:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",tag:"航天级"},{name:"TR-H7104 高承载角接触抗振轴承",specs:"高速机床专用 | 预载荷锁定 | 零噪音运转",image:"https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&q=80",tag:"精密机床"},{name:"TR-W33 自调心抗挤压风电重载轴承",specs:"海上风电专用 | 高耐盐雾腐蚀涂层 | 30年免维护",image:"https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80",tag:"风力发电"}],contactEmail:"tech@triton-bearing.com",phone:"+86 (21) 8876-5432",address:"上海市张江高科技园区精密智造港 8 号楼"},valve:{companyName:"大奢威隆控制阀门 (Veyron Control Valves)",slogan:"驭流防爆，滴水不漏，为大国重器系上安全带",description:"威隆控制阀门深耕流体精密控制30年。在深海高压、超高温熔盐、强腐蚀核工业等苛刻管网上，以严丝合缝的密封自愈工艺，为全球化工航母护航。",features:[{title:"三偏心金属硬密封",desc:"专利耐冲刷密封面，零泄漏级别可达 ANSI Class VI 级，高温无咬死。",icon:"🛡️"},{title:"防爆智能自愈执行机构",desc:"内置边缘微处理器，实时诊断阀门卡涩、填料泄漏并在线预警。",icon:"🧠"},{title:"特种钛合金铸造",desc:"对标核电级工艺，可耐受 1200℃ 超高温度与 30Mpa 极端压差。",icon:"🔥"}],products:[{name:"VR-800F 高压防爆气动调节阀",specs:"公称通径DN250 | 压力等级PN100 | 等百分比流量特性",image:"https://images.unsplash.com/photo-1581092162384-8987c17d4e26?auto=format&fit=crop&w=600&q=80",tag:"核石化"},{name:"VR-5100 超温熔盐自平衡切断阀",specs:"光热发电专用 | 耐750℃超高温 | 零泄露高回座",image:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",tag:"新能源"},{name:"VR-W903 强腐蚀性衬氟特种球阀",specs:"高分子PTFE衬里 | 零缝隙耐氯碱强酸 | 手气电动可选",image:"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",tag:"高耐腐"}],contactEmail:"inquiry@veyron-valve.com",phone:"+86 (10) 6688-9999",address:"北京市亦庄经济技术开发区重工业园A区"},trading:{companyName:"高奢寰宇奢雅贸易 (Aether Lux Global Trading)",slogan:"连接全球奢华美学，为精英阶层定制生活范式",description:"寰宇奢雅是一家面向欧美中东高净值客群的全球高端买手贸易公司。我们跨越艺术、高端家具与新奢面料界限，把传承百年的奢石工艺与先锋设计美学送抵您的生活空间。",features:[{title:"100% 意大利矿山直采",desc:"独家签约阿尔卑斯矿区，提供带有天然冰裂自愈美感的稀缺奢石珍品。",icon:"⚜️"},{title:"艺术大师限量联名",desc:"每季合作米兰先锋艺术家，让日常生活用品升华成为馆藏级艺术资产。",icon:"🎨"},{title:"全流程私密管家护送",desc:"恒温包机运输，全程VIP双通道报关，保证完好无损地优雅落位。",icon:"🍷"}],products:[{name:"AETHER-01 纯手工打磨天然白玉大理石茶几",specs:"独版天然花纹 | 莫氏硬度6级防刮 | 24K真金镀底座",image:"https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",tag:"馆藏级"},{name:"AETHER-09 意式极简安哥拉羊绒云端单人椅",specs:"手工真皮绗缝 | 记忆羽绒填充 | 符合大奢人体工程学",image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80",tag:"意式极简"},{name:"AETHER-05 限量版高透水管防爆香薰氛围台灯",specs:"吹制有色水晶 | 专利防尘防爆散热 | 无极触控调光",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",tag:"设计师联名"}],contactEmail:"vip@aether-lux.com",phone:"+86 (21) 9876-1234",address:"上海市静安区南京西路大奢写字楼 66 层"}};function q(e,t,a,s,r,o){let i="trading";const n=r.toLowerCase();n.includes("轴承")||n.includes("bearing")||n.includes("精密")||n.includes("机械")?i="bearing":n.includes("阀门")||n.includes("valve")||n.includes("调节阀")||n.includes("工业")?i="valve":(n.includes("外贸")||n.includes("大奢")||n.includes("奢华")||n.includes("贸易")||n.includes("公司"))&&(i="trading");const l=K(z[i],o),m=(o?.dataMode==="real"?"real":"mock")==="real"?"真实字段模式":"Mock 数据模式",c=o?.bindingLabel||"使用符合真实模型结构的 Mock 数据进行预览";let p="";return t.includes("hero")?p=`
      <section class="relative bg-slate-900 text-white min-h-[70vh] flex items-center justify-center overflow-hidden py-20 px-6">
        <!-- 动态粒子/纹理背景 -->
        <div class="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-950"></div>
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8" x-data="{ loaded: false }" x-init="setTimeout(() => loaded = true, 100)">
          <!-- 高级微动微动画 -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider transition-all duration-700"
               :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'">
            <span>✨ 全球卓越的顶级工业制造底座</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-blue-200 duration-1000 transform transition-all"
              :class="loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'">
            ${l.companyName}
          </h1>
          
          <p class="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light duration-1000 delay-200 transform transition-all"
             :class="loaded ? 'opacity-100' : 'opacity-0 translate-y-4'">
            "${l.slogan}"
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 duration-1000 delay-300 transform transition-all"
               :class="loaded ? 'opacity-100' : 'opacity-0 translate-y-4'">
            <a href="#products" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wider">
              浏览高奢产品线
            </a>
            <a href="#contact" class="px-8 py-4 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl backdrop-blur-md transition-all hover:border-slate-500 text-sm">
              获取技术方案书
            </a>
          </div>
        </div>
      </section>
    `:t.includes("feature")?p=`
      <section id="features" class="py-24 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto">
          <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">核心优势与卓越工艺</h2>
            <div class="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
            <p class="text-slate-500 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
              历经数千次极端物理自愈测试与工业可靠性论证，我们以毫秒级微小公差和尖端防爆设计，奠定行业高奢天花板级标准。
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${l.features.map((d,h)=>`
              <div class="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div class="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  ${d.icon}
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">${d.title}</h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${d.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `:t.includes("about")?p=`
      <section id="about" class="py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <!-- 左侧内容卡片 -->
            <div class="flex-1 space-y-8">
              <div class="inline-flex px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                ⚜️ 奢华传承 / 极致探索
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                卓越智造，始于微米之间的执着与自愈防爆密封技术
              </h2>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base">
                ${l.description}
              </p>
              <div class="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <h4 class="text-4xl font-extrabold text-blue-600">30+</h4>
                  <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">年全球工业出海服务经验</p>
                </div>
                <div>
                  <h4 class="text-4xl font-extrabold text-blue-600">0.01</h4>
                  <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">微米级原子微刻公差控制</p>
                </div>
              </div>
            </div>
            
            <!-- 右侧磨砂玻璃大图容器 -->
            <div class="flex-1 relative">
              <div class="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-2xl z-0 rounded-3xl"></div>
              <div class="relative z-10 border border-slate-200/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-slate-900/30">
                <img src="${l.products[0].image}" alt="高奢工艺" class="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent text-white">
                  <p class="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-1">物理自愈现场</p>
                  <p class="text-sm text-slate-200">全智能温升自适应抗挤压阀座/轴承运行展示仪</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `:t.includes("product")||t.includes("list")?p=`
      <section id="products" class="py-24 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800" x-data="{ selectedTag: 'all' }">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div class="space-y-4">
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">高保真黄金产品系列目录</h2>
              <div class="w-16 h-1 bg-blue-600 rounded"></div>
              <p class="text-slate-500 dark:text-slate-400 font-light text-sm max-w-xl">
                所有型号均通过全密封防爆以及自愈级流体控制物理性能测试。
              </p>
            </div>
            
            <!-- Alpine.js 动态筛选 Tab -->
            <div class="flex flex-wrap gap-2 shrink-0 bg-slate-200/60 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200/20">
              <button class="px-4 py-2 text-xs font-semibold rounded-lg transition-all"
                      :class="selectedTag === 'all' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'"
                      @click="selectedTag = 'all'">
                全部系列
              </button>
              ${Array.from(new Set(l.products.map(d=>d.tag))).map(d=>`
                <button class="px-4 py-2 text-xs font-semibold rounded-lg transition-all"
                        :class="selectedTag === '${d}' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'"
                        @click="selectedTag = '${d}'">
                  ${d}
                </button>
              `).join("")}
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${l.products.map((d,h)=>`
              <div class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-3xl shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
                   x-show="selectedTag === 'all' || selectedTag === '${d.tag}'"
                   x-transition:enter="transition ease-out duration-300"
                   x-transition:enter-start="opacity-0 scale-95"
                   x-transition:enter-end="opacity-100 scale-100">
                <div class="relative overflow-hidden h-64 bg-slate-100">
                  <img src="${d.image}" alt="${d.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span class="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 text-white text-[12px] uppercase tracking-widest font-extrabold rounded-full shadow-md backdrop-blur-sm">
                    ${d.tag}
                  </span>
                </div>
                <div class="p-6 space-y-4">
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    ${d.name}
                  </h3>
                  <p class="text-xs text-slate-400 font-mono tracking-tight bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                    ${d.specs}
                  </p>
                  <div class="flex items-center justify-between pt-2">
                    <span class="text-xs text-green-500 font-semibold flex items-center gap-1">
                      <span class="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                      自愈运行保护就绪
                    </span>
                    <a href="#contact" class="text-xs font-bold text-blue-600 hover:text-indigo-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      索取报价及三维图 <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `:t.includes("contact")||t.includes("form")?p=`
      <section id="contact" class="py-24 px-6 bg-slate-950 text-slate-300 overflow-hidden relative">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="max-w-6xl mx-auto relative z-10">
          <div class="flex flex-col lg:flex-row items-stretch gap-16">
            <!-- 触点信息卡 -->
            <div class="flex-1 flex flex-col justify-between space-y-8">
              <div class="space-y-4">
                <div class="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  📞 24H 环球技术支持总机
                </div>
                <h2 class="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  开启高保真工业安全连接
                </h2>
                <p class="text-slate-400 font-light max-w-md">
                  若您有极端工况控制设计、图纸选型或者出口退税贸易采购需求，我们的高级应用数字员工随时在边缘为您提供全链路方案书。
                </p>
              </div>
              
              <div class="space-y-6 text-sm">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white text-lg">📧</div>
                  <div>
                    <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold">环球采购邮箱</p>
                    <p class="text-white font-medium">${l.contactEmail}</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white text-lg">☎️</div>
                  <div>
                    <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold">快速响应热线</p>
                    <p class="text-white font-medium">${l.phone}</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white text-lg">📍</div>
                  <div>
                    <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold">物理智造总部</p>
                    <p class="text-white font-medium">${l.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 大奢表单卡片 (Alpine.js 控制交互) -->
            <div class="flex-1 bg-slate-900/80 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col justify-center"
                 x-data="{ name: '', email: '', message: '', submitted: false, submitting: false }"
                 @submit.prevent="submitting = true; setTimeout(() => { submitting = false; submitted = true }, 1000)">
              
              <div x-show="!submitted" class="space-y-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label class="text-xs text-slate-400 font-semibold uppercase tracking-wider">超管尊称</label>
                    <input type="text" x-model="name" required class="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm" placeholder="刘工 / 超级管理员" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs text-slate-400 font-semibold uppercase tracking-wider">电子邮箱</label>
                    <input type="email" x-model="email" required class="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm" placeholder="services@industry.com" />
                  </div>
                </div>
                <div class="space-y-2">
                  <label class="text-xs text-slate-400 font-semibold uppercase tracking-wider">特种定制需求简述</label>
                  <textarea x-model="message" required class="w-full h-32 px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none" placeholder="请在此输入针对精密阀门、轴承公差、流量系数等详细参数的采购指令..."></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-sm tracking-wider">
                  <span x-show="!submitting">🚀 瞬间派发采购单至数字员工</span>
                  <span x-show="submitting" class="flex items-center gap-1.5"><span class="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span> 派发中...</span>
                </button>
              </div>
              
              <!-- 提交成功后的微交互 -->
              <div x-show="submitted" class="text-center py-10 space-y-4 animate-in zoom-in-95">
                <div class="w-16 h-16 bg-green-500/10 border border-green-500/30 text-green-400 rounded-2xl flex items-center justify-center text-3xl mx-auto">🎉</div>
                <h3 class="text-xl font-bold text-white">需求物理派发成功！</h3>
                <p class="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">
                  系统级数字员工已接到您的工况指令。我们将于 5 分钟内为您自愈生成高奢外贸 PDF 报价清单。
                </p>
                <button @click="submitted = false; name=''; email=''; message=''" class="text-xs text-blue-400 hover:underline">再次发送指令</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `:p=`
      <section class="py-16 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div class="max-w-5xl mx-auto text-center space-y-4">
          <h2 class="text-2xl font-bold text-slate-800 dark:text-white">${a}</h2>
          <p class="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">${s}</p>
          <div class="p-6 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-slate-400 text-xs">
             [ 物理静态区块 ${t} 准备就绪 ]
          </div>
        </div>
      </section>
    `,`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${a} | ${l.companyName}</title>
  <!-- 引入 Google Fonts 提升整体高奢字形气场 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Noto+Sans+SC:wght@300;400;700&display=swap" rel="stylesheet">
  
  <!-- CDN 载入 Alpine.js 控制微交互（比 React 轻量上千倍，边缘 0 内存开销） -->
  <script src="https://fastly.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer><\/script>
  
  <!-- CDN 载入 Tailwind CSS 4.0 极速浏览器端编译器 -->
  <script src="https://fastly.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
  
  <style>
    body {
      font-family: 'Outfit', 'Noto Sans SC', sans-serif;
    }
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image: radial-gradient(circle, rgba(99, 102, 241, 0.08) 1px, transparent 1px);
    }
    /* 屏蔽滚动条提升高奢 iframe 嵌套下的浑然一体感 */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(99, 102, 241, 0.2);
      border-radius: 4px;
    }
  </style>
</head>
  <body class="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased overflow-x-hidden">
    <div class="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div class="text-[11px] font-semibold uppercase tracking-wider text-blue-300">${m}</div>
        <div class="text-[11px] text-slate-300">${c}</div>
      </div>
    </div>
  ${p}
</body>
</html>`}function H(e,t){let a=e;const s=t.toLowerCase();if((s.includes("黑金")||s.includes("dark")||s.includes("color")||s.includes("配色")||s.includes("深色"))&&(a=a.replace(/bg-slate-50/g,"bg-slate-950").replace(/bg-white/g,"bg-slate-900").replace(/text-slate-800/g,"text-slate-100").replace(/text-slate-900/g,"text-amber-400").replace(/text-slate-600/g,"text-slate-300").replace(/text-slate-500/g,"text-slate-400").replace(/from-blue-600 to-indigo-600/g,"from-amber-500 to-yellow-600").replace(/from-blue-500 to-indigo-500/g,"from-amber-600 to-yellow-500").replace(/bg-blue-600/g,"bg-amber-500").replace(/text-blue-600/g,"text-amber-400").replace(/border-blue-500\/30/g,"border-amber-500/30").replace(/bg-blue-500\/10/g,"bg-amber-500/10").replace(/text-blue-400/g,"text-amber-400").replace(/bg-blue-50/g,"bg-amber-500/10").replace(/zero-friction spinning/g,"zero-friction spinning under amber light").replace(/💎/g,"⚜️")),(s.includes("文案")||s.includes("text")||s.includes("write")||s.includes("重写")||s.includes("高奢"))&&(a=a.replace(/核心优势与卓越工艺/g,"皇家御用级精密防爆流体控制核心").replace(/卓越智造，始于微米之间的执着与自愈防爆密封技术/g,"至臻美学与极端物理耐压公差自愈工艺的极致凝结").replace(/我们以毫秒级微小公差和尖端防爆设计/g,"我们以航天级精密控制，无惧超高温熔盐强腐蚀，确保全网零泄露").replace(/浏览高奢产品线/g,"品鉴高奢工业艺术品")),(s.includes("特效")||s.includes("glass")||s.includes("磨砂")||s.includes("动态"))&&(a=a.replace(/<\/head>/,`
  <style>
    section, div.border {
      backdrop-filter: blur(16px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    img:hover {
      filter: brightness(1.1) contrast(1.05) !important;
      transform: scale(1.03) rotate(0.5deg) !important;
    }
  </style>
</head>`)),!s.includes("配色")&&!s.includes("黑金")&&!s.includes("特效")&&!s.includes("文案")&&t.length>3){const r=t.match(/(?:标题改成|标题改为|命名为|改成|改为)['"“]([^'”"”]+)['"”]/);if(r&&r[1]){const o=r[1];a=a.replace(/<h1[^>]*>([^<]+)<\/h1>/g,`<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-blue-200">${o}</h1>`),a=a.replace(/<h2[^>]*>([^<]+)<\/h2>/g,`<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">${o}</h2>`)}else a=a.replace(/<body>/,`<body>
  <!-- 💡 系统级数字员工小气泡提示：已根据您的微调指令 “${t}” 在 0ms 边缘内存执行了代码正则灌入与视觉热重构！ -->`)}return a}const J=["README.md","package.json","astro.config.mjs","src/layouts/BaseLayout.astro","src/components/PreviewSection.astro","src/pages/index.astro"];function X(e){return e.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]?.trim()||e}function O(e,t){const a=t.map(s=>X(s)).filter(Boolean).join(`
`);return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${e} | lowcode-deployer 预览</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Noto+Sans+SC:wght@300;400;700&display=swap" rel="stylesheet">
  <script src="https://fastly.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer><\/script>
  <script src="https://fastly.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
  <style>
    body {
      margin: 0;
      font-family: 'Outfit', 'Noto Sans SC', sans-serif;
      background: #020617;
    }
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(99, 102, 241, 0.2);
      border-radius: 4px;
    }
  </style>
</head>
<body>
  ${a}
</body>
</html>`}function R(e){const t=String(e||"").trim();return t?t.startsWith("/")?t:`/${t}`:"/"}function Y(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,58)||`lowcode-site-${crypto.randomUUID().slice(0,6)}`}function $(e){return e.endsWith(".html")?"text/html; charset=utf-8":e.endsWith(".json")?"application/json; charset=utf-8":e.endsWith(".txt")?"text/plain; charset=utf-8":"application/octet-stream"}async function V(e,t,a,s){const r=`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects`,o={Authorization:`Bearer ${t}`,"Content-Type":"application/json"},i=await fetch(`${r}/${a}`,{headers:o}),n=await i.json().catch(()=>({}));if(i.ok&&n?.success)return{created:!1,project:n.result};const l=await fetch(r,{method:"POST",headers:o,body:JSON.stringify({name:a,production_branch:s})}),u=await l.json().catch(()=>({}));if(!l.ok||u?.success===!1)throw new Error(u?.errors?.[0]?.message||u?.message||"创建 Pages 项目失败");return{created:!0,project:u?.result||null}}async function W(e,t,a,s,r){const o=new FormData;o.set("branch",s);for(const l of r)o.append(l.path,new File([l.content],l.path.split("/").pop()||"file",{type:$(l.path)}),l.path);const i=await fetch(`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects/${a}/deployments`,{method:"POST",headers:{Authorization:`Bearer ${t}`},body:o}),n=await i.json().catch(()=>({}));if(!i.ok||n?.success===!1)throw new Error(n?.errors?.[0]?.message||n?.message||"Pages 直传部署失败");return n?.result||null}async function G(e,t,a,s){const r=S(a),o=Array.isArray(r?.pages)?r.pages:[],i=[];for(const n of o){const l=`projects/${t}/pages/${n.pageId}.html`,u=await e.get(l),m=u?await u.text():O(n.pageName||n.pageId,[]),c=R(n.routePath||(n.pageId==="home"?"/":n.pageId)),p=c==="/"?"index.html":`${c.replace(/^\/+/,"").replace(/\/+$/,"")}/index.html`;i.push({path:p,content:m})}return i.push({path:"_headers",content:`/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
`}),i.push({path:"site-plan.json",content:JSON.stringify(r,null,2)}),i.push({path:"astro-handoff.json",content:JSON.stringify(s||{},null,2)}),i}function Q(){return JSON.stringify({name:"lowcode-deployer-astro-template",private:!0,version:"0.1.0",type:"module",scripts:{dev:"astro dev",build:"astro build",preview:"astro preview"},dependencies:{astro:"^5.0.0"}},null,2)}function Z(){return`import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
});
`}function ee(){return`---
interface Props {
  title?: string;
  description?: string;
}

const {
  title = 'Lowcode Site',
  description = 'Generated by lowcode-deployer astro template',
} = Astro.props as Props;
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <style>
      :root {
        color-scheme: light;
        --bg: #f8fafc;
        --fg: #0f172a;
        --muted: #64748b;
        --card: #ffffff;
        --border: #e2e8f0;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Inter, Arial, sans-serif;
        background: var(--bg);
        color: var(--fg);
      }

      main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 32px 20px 64px;
      }
    </style>
  </head>
  <body>
    <main>
      <slot />
    </main>
  </body>
</html>
`}function te(){return`---
interface Props {
  title: string;
  summary?: string;
  previewUrl?: string;
}

const {
  title,
  summary = '',
  previewUrl = '',
} = Astro.props as Props;
---

<section style="margin-bottom: 24px; padding: 20px; border: 1px solid var(--border); border-radius: 16px; background: var(--card);">
  <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 12px;">
    <h2 style="margin: 0; font-size: 20px;">{title}</h2>
    {previewUrl ? (
      <a href={previewUrl} target="_blank" rel="noreferrer" style="font-size: 12px; color: #2563eb; text-decoration: none;">
        打开预览
      </a>
    ) : null}
  </div>
  {summary ? (
    <p style="margin: 0; color: var(--muted); line-height: 1.7;">{summary}</p>
  ) : null}
</section>
`}function se(e){const t=e?.handoff||{};return`export const siteData = ${JSON.stringify(t,null,2)} as const;

export function getPageById(pageId: string) {
  return siteData.pages.find((page) => page.pageId === pageId) || null;
}
`}function ae(e,t){const a=t==="/"?"..":"../".repeat(Math.max(t.split("/").filter(Boolean).length,1));return`---
import BaseLayout from '${a}/layouts/BaseLayout.astro';
import PreviewSection from '${a}/components/PreviewSection.astro';
import { getPageById } from '${a}/lib/lowcode-site';

const page = getPageById(${JSON.stringify(e.pageId)});
const sections = page?.sections || [];
---

<BaseLayout title={page?.seo?.title || ${JSON.stringify(e.pageName||e.pageId)}} description={page?.seo?.description || ''}>
  <header style="margin-bottom: 32px;">
    <div style="display: inline-flex; padding: 6px 10px; border-radius: 999px; background: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 600;">
      lowcode-deployer
    </div>
    <h1 style="margin: 16px 0 8px; font-size: 36px;">{page?.pageName || ${JSON.stringify(e.pageName||e.pageId)}}</h1>
    <p style="margin: 0; color: #64748b; line-height: 1.8;">
      当前页面由 lowcode-deployer 根据 DSL 和数据绑定导出，可继续替换为真实 Astro 组件。
    </p>
  </header>

  {sections.map((section) => (
    <PreviewSection
      title={section.title}
      summary={section.summary || section.description || section.astroComponent}
      previewUrl={section.previewUrl || ''}
    />
  ))}
</BaseLayout>
`}function re(e,t){const a=[{path:"package.json",content:Q(),kind:"template"},{path:"astro.config.mjs",content:Z(),kind:"template"},{path:"src/layouts/BaseLayout.astro",content:ee(),kind:"template"},{path:"src/components/PreviewSection.astro",content:te(),kind:"template"},{path:"src/lib/lowcode-site.ts",content:se(t),kind:"generated"},{path:"src/data/astro-handoff.json",content:JSON.stringify(t?.handoff||{},null,2),kind:"generated"}],s=Array.isArray(t?.pages)?t.pages:[];for(const r of s){const o=R(r?.routePath||"/"),i=o==="/"?"src/pages/index.astro":`src/pages/${o.replace(/^\/+/,"").replace(/\/+$/,"")}.astro`;a.push({path:i,content:ae(r,o),kind:"generated"})}return a.push({path:"export-manifest.json",content:JSON.stringify({projectId:e,generatedAt:t?.generatedAt||new Date().toISOString(),fileCount:a.length,pages:s.map(r=>({pageId:r.pageId,routePath:r.routePath}))},null,2),kind:"manifest"}),a}function E(e,t){for(const[a,s]of Object.entries(e)){const r=a.toLowerCase(),o=ue(s);if(t.some(n=>r.includes(n)||o.some(l=>l.toLowerCase().includes(n))))return{slug:a,displayName:a,fields:o}}return null}function L(e,t){const a=["product","goods","item","commodity","spu","sku","prod","产品","商品","货品","单品","货物"],s=["category","classify","type","tag","sort","catalog","kind","分类","类别","分组","品类","栏目","层级"];return{source:t,modelsCount:Object.keys(e).length,models:Object.entries(e).map(([r,o])=>({slug:r,fieldCount:Array.isArray(o)?o.length:0})),matched:{product:E(e,a),category:E(e,s)}}}function M(e){const t=e.matched.product?.fields||[],a=e.matched.category?.fields||[];return[{sourceModel:e.matched.product?.slug||"product",usage:"产品列表、产品卡片、解决方案推荐",suggestedFields:[t.find(s=>/^(name|title)$/i.test(s))||t.find(s=>/name|title/i.test(s))||"name",t.find(s=>/cover|image|banner|thumb/i.test(s))||"cover",t.find(s=>/summary|description|desc|intro/i.test(s))||"description",t.find(s=>/price|amount/i.test(s))||"price",t.find(s=>/category|categoryId|classify/i.test(s))||"categoryId"]},{sourceModel:e.matched.category?.slug||"category",usage:"产品分类、导航筛选、栏目标签",suggestedFields:[a.find(s=>/^(name|title)$/i.test(s))||a.find(s=>/name|title/i.test(s))||"name",a.find(s=>/slug|code/i.test(s))||"slug",a.find(s=>/parent/i.test(s))||"parentId",a.find(s=>/sort|order|rank/i.test(s))||"sortOrder"]}]}function oe(e){return M(e).map(a=>({sourceModel:a.sourceModel,usage:a.usage,status:a.suggestedFields.some(s=>!s)?"fallback":"mapped",fields:a.suggestedFields.reduce((s,r,o)=>{const i=["title","image","description","price","relation"];return s[i[o]||`field${o+1}`]=r,s},{})}))}function ne(e){const t=e?.mode==="real"?"real":"mock",a=e?.fieldMappings?.find(o=>/product|goods|item|commodity|prod/i.test(o.sourceModel)),s=a?.fields?.title||a?.fields?.field1||"name",r=a?.fields?.image||"cover";return{mode:t,modeLabel:t==="real"?"真实字段模式":"Mock 数据模式",bindingLabel:t==="real"?`按真实字段契约映射：标题=${s}，图片=${r}`:"使用符合真实模型结构的 Mock 数据进行预览"}}async function ie(e,t){const a=await e.prepare("SELECT id, slug, name FROM collections WHERE slug = ? LIMIT 1").bind(t).first();return a?{id:Number(a.id||0),slug:String(a.slug||t),name:String(a.name||t)}:null}function le(e){return e==null?"":Array.isArray(e)?e.slice(0,3).join(", "):typeof e=="object"?JSON.stringify(e):String(e)}async function ce(e,t,a=3){const s=Array.isArray(t?.fieldMappings)?t.fieldMappings:[],r=[];for(const o of s.slice(0,2)){const i=await ie(e,o.sourceModel);if(!i?.id){r.push({sourceModel:o.sourceModel,total:0,items:[]});continue}const n=await e.prepare("SELECT count(*) as count FROM entities WHERE collection_id = ?").bind(i.id).first(),l=await e.prepare(`
      SELECT id, data_json, locale, created_at
      FROM entities
      WHERE collection_id = ?
      ORDER BY created_at DESC, id DESC
      LIMIT ?
    `).bind(i.id,a).all(),m=(Array.isArray(l?.results)?l.results:[]).map(c=>{let p={};try{p=c?.data_json?JSON.parse(String(c.data_json)):{}}catch{p={}}const g={id:Number(c?.id||0),locale:c?.locale||""};for(const[d,h]of Object.entries(o.fields||{}))g[d]=le(p?.[String(h)]);return g});r.push({sourceModel:o.sourceModel,total:Number(n?.count||0),items:m})}return r}function j(e){return String(e||"").replace(/\s+/g," ").trim()}function de(e){return JSON.parse(JSON.stringify(e))}function pe(e){return String(e?.key||e?.name||e?.slug||e?.id||"").trim()}function ue(e){return Array.isArray(e)?e.map(t=>pe(t)).filter(Boolean):[]}function me(e){const t=e.toLowerCase();return["轴承","bearing","精密","机械"].some(a=>t.includes(a))?{key:"bearing",label:"精密工业",companyName:"钛睿精密工业",audience:"工业采购负责人、设备制造商、海外渠道商",goal:"展示品牌能力、产品系列和技术实力，获取询盘与选型需求"}:["阀门","valve","管道","流体","化工"].some(a=>t.includes(a))?{key:"valve",label:"工业控制设备",companyName:"威隆流体控制",audience:"石化、电力、工程总包和海外工业客户",goal:"展示工况解决方案、核心产品和交付案例，承接采购与技术咨询"}:["外贸","出海","独立站","贸易","跨境"].some(a=>t.includes(a))?{key:"trading",label:"外贸品牌站",companyName:"寰宇品牌出海",audience:"海外采购商、品牌合作伙伴、渠道客户",goal:"快速输出国际化品牌形象站，强化产品展示和留资转化"}:["saas","软件","平台","系统","ai"].some(a=>t.includes(a))?{key:"saas",label:"SaaS 产品站",companyName:"智流云平台",audience:"企业决策者、业务负责人、数字化团队",goal:"讲清产品价值、功能能力和客户收益，推动预约演示"}:{key:"brand",label:"品牌官网",companyName:"启域品牌科技",audience:"潜在客户、合作伙伴、品牌访客",goal:"建立品牌官网首页、能力展示页和联系转化路径"}}function ge(e){const t=e.toLowerCase();return["落地页","单页","专题","campaign","landing"].some(a=>t.includes(a))?"landing":["案例","作品集","showcase","portfolio"].some(a=>t.includes(a))?"showcase":["产品","商品","catalog","目录"].some(a=>t.includes(a))?"catalog":"corporate"}function fe(e,t){const a=e.toLowerCase(),s=[];return["高端","奢华","黑金","luxury"].some(r=>a.includes(r))&&s.push("luxury","dark"),["科技","未来","ai","tech"].some(r=>a.includes(r))&&s.push("tech","clean"),["工业","制造","硬核"].some(r=>a.includes(r))&&s.push("industrial","structured"),["极简","简约","minimal"].some(r=>a.includes(r))&&s.push("minimal"),s.length===0&&(t==="saas"?s.push("tech","clean","conversion"):t==="trading"?s.push("brand","global","conversion"):s.push("industrial","premium","conversion")),Array.from(new Set(s))}function _(e){return e.includes("luxury")?{colorPrimary:"#d4a017",colorAccent:"#111827",surface:"#020617",radius:"20px",tone:"luxury"}:e.includes("tech")?{colorPrimary:"#2563eb",colorAccent:"#0f172a",surface:"#f8fafc",radius:"18px",tone:"tech"}:{colorPrimary:"#1d4ed8",colorAccent:"#0f172a",surface:"#ffffff",radius:"16px",tone:"brand"}}function he(e,t){const s=j(e).match(/(?:为|给|帮我做|生成|创建|搭建)([^，。,.]{2,18})(?:官网|网站|站点|独立站|落地页|产品站)/);return s?.[1]?j(s[1]):t}function ye(e){const t=e.toLowerCase();return t.includes("hero")?"hero":t.includes("feature")?"feature-grid":t.includes("product")?"product-grid":t.includes("solution")?"solution-list":t.includes("case")?"case-list":t.includes("faq")?"faq":t.includes("contact")||t.includes("form")?"contact-form":t.includes("timeline")?"timeline":"content-block"}function f(e,t,a){const s=ye(e);return{sectionId:e,title:t,description:a,type:s,variant:"default",props:{title:t,description:a},bindings:s==="product-grid"?{items:"product.list"}:s==="case-list"?{items:"case.list"}:s==="contact-form"?{submitTarget:"contact.form"}:{}}}function C(e,t,a){const s={home:[f("hero",`${t} 首屏主视觉`,`突出 ${a} 品牌定位、核心卖点和首要转化按钮`),f("features","核心优势展示","以三栏能力卡形式展示差异化能力、工艺或平台价值"),f("about","品牌与方案介绍","说明团队背景、服务能力、技术实力或品牌信任状"),f("products","重点产品或方案","展示主打产品、解决方案或服务包，支持后续映射真实数据"),f("contact","线索收集与联系入口","放置询盘表单、联系方式和下一步转化动作")],"about-us":[f("about-hero","关于我们首屏","概述公司历史、品牌愿景和核心定位"),f("about-features","团队能力与资质","用能力卡和认证信息展示公司方法论与交付实力"),f("about-contact","合作沟通入口","承接品牌介绍页尾部的联系和合作意向")],products:[f("products-hero","产品中心首屏","突出主产品线、分类方式和核心参数亮点"),f("product-list","产品列表与卡片","以列表或卡片网格展示产品，便于切换到真实模型字段"),f("product-features","产品优势补充","说明差异化卖点、交付标准和应用场景"),f("product-contact","产品询盘转化","承接报价、样品申请和业务联系")],solutions:[f("solutions-hero","解决方案首屏","概述服务行业、典型问题和方法论"),f("solutions-features","方案能力矩阵","展示解决方案模块、流程和交付边界"),f("solutions-list","典型方案列表","列出核心方案包、场景化能力或行业服务"),f("solutions-contact","方案咨询入口","承接预约演示、技术咨询或顾问联系")],cases:[f("case-hero","案例成果首屏","强调项目结果、行业覆盖和客户信任"),f("case-list","案例列表展示","按项目或行业展示案例卡片，便于后续映射案例模型"),f("case-about","交付方法补充","解释案例背后的流程、团队协同和项目方法"),f("case-contact","合作沟通入口","让用户从案例页继续留下需求")],contact:[f("contact-hero","联系我们首屏","强调快速响应、顾问支持和合作方式"),f("contact-form","需求表单与联系信息","集中承接电话、邮箱、表单和商务咨询"),f("contact-faq","常见问题与补充说明","减少沟通成本，提前说明交付周期和合作方式")]};return s[e]||s.home}function D(e,t,a){const s=me(t),r=ge(t),o=fe(t,s.key),i=_(o),n=he(t,s.companyName),l=a||L({},"db_fallback"),m=(r==="landing"?[{pageId:"home",pageName:"首页",routePath:"/"},{pageId:"contact",pageName:"联系我们",routePath:"/contact"}]:r==="showcase"?[{pageId:"home",pageName:"首页",routePath:"/"},{pageId:"cases",pageName:"案例展示",routePath:"/cases"},{pageId:"about-us",pageName:"关于我们",routePath:"/about-us"},{pageId:"contact",pageName:"联系我们",routePath:"/contact"}]:r==="catalog"?[{pageId:"home",pageName:"首页",routePath:"/"},{pageId:"products",pageName:"产品中心",routePath:"/products"},{pageId:"solutions",pageName:"解决方案",routePath:"/solutions"},{pageId:"contact",pageName:"联系我们",routePath:"/contact"}]:[{pageId:"home",pageName:"首页",routePath:"/"},{pageId:"about-us",pageName:"关于我们",routePath:"/about-us"},{pageId:"products",pageName:"产品中心",routePath:"/products"},{pageId:"contact",pageName:"联系我们",routePath:"/contact"}]).map(d=>({...d,sections:C(d.pageId,n,s.label)})),c=new Date().toISOString(),p=M(l),g={mode:"mock",fieldMappings:oe(l),schemaSource:l.source,updatedAt:c};return{projectId:e,version:1,siteMeta:{siteName:n,industry:s.label,siteType:r,styleKeywords:o,sourceCommand:j(t)},siteBrief:{summary:`${n} 的 ${s.label}${r==="landing"?"落地页":"官网"}，重点围绕 ${s.goal}。`,targetAudience:s.audience,primaryGoal:s.goal},themeTokens:i,bindingHints:p,schemaAnalysis:l,dataBinding:g,changeLog:[{version:1,instruction:j(t),summary:"初始化站点 DSL",createdAt:c,patches:[{op:"add",targetType:"page",targetId:"site",summary:"根据用户描述创建首版站点结构"}]}],dsl:{version:1,siteMeta:{siteName:n,industry:s.label,siteType:r,styleKeywords:o,sourceCommand:j(t)},themeTokens:i,pages:m},pages:m}}function S(e){if(e?.dsl?.pages&&Array.isArray(e.dsl.pages))return e;const t=D(String(e?.projectId||crypto.randomUUID()),String(e?.siteMeta?.sourceCommand||e?.sourceCommand||"低代码快速建站"),e?.schemaAnalysis);return{...t,...e,version:Number(e?.version||1),schemaAnalysis:e?.schemaAnalysis||t.schemaAnalysis,dataBinding:e?.dataBinding||t.dataBinding,changeLog:Array.isArray(e?.changeLog)?e.changeLog:t.changeLog,dsl:{...t.dsl,...e?.dsl||{},pages:Array.isArray(e?.pages)?e.pages:t.dsl.pages},pages:Array.isArray(e?.pages)?e.pages:t.pages}}function N(e,t,a,s){e.pages.some(r=>r.pageId===t)||e.pages.push({pageId:t,pageName:a,routePath:s,sections:C(t,e.siteMeta.siteName,e.siteMeta.industry)})}function k(e,t){e.pages=e.pages.filter(a=>a.pageId!==t)}function T(e,t){const a=e.pages.find(s=>s.pageId==="home");a&&(a.sections.some(s=>s.sectionId===t.sectionId)||a.sections.push(t))}function P(e,t){const a=e.pages.find(s=>s.pageId==="home");a&&(a.sections=a.sections.filter(s=>s.sectionId!==t))}function be(e,t){const a=de(e),s=t.toLowerCase(),r=[],o=[];["黑金","奢华","高端"].some(n=>s.includes(n))?(a.siteMeta.styleKeywords=Array.from(new Set(["luxury","dark",...a.siteMeta.styleKeywords])),a.themeTokens=_(a.siteMeta.styleKeywords),r.push("已切换为偏高端黑金风格"),o.push({op:"update",targetType:"theme",targetId:"themeTokens",summary:"主题调整为高端黑金风格"})):["科技","未来","ai","蓝色"].some(n=>s.includes(n))?(a.siteMeta.styleKeywords=Array.from(new Set(["tech","clean",...a.siteMeta.styleKeywords])),a.themeTokens=_(a.siteMeta.styleKeywords),r.push("已强化科技风格与蓝色主题"),o.push({op:"update",targetType:"theme",targetId:"themeTokens",summary:"主题调整为科技蓝风格"})):["极简","简约"].some(n=>s.includes(n))&&(a.siteMeta.styleKeywords=Array.from(new Set(["minimal",...a.siteMeta.styleKeywords.filter(n=>n!=="luxury")])),a.themeTokens=_(a.siteMeta.styleKeywords),r.push("已调整为更简约的页面风格"),o.push({op:"update",targetType:"theme",targetId:"themeTokens",summary:"主题调整为简约风格"})),s.includes("案例")&&(s.includes("删除")||s.includes("去掉")?(k(a,"cases"),P(a,"case-list"),r.push("已移除案例页面与首页案例模块"),o.push({op:"remove",targetType:"page",targetId:"cases",summary:"删除案例展示页面"}),o.push({op:"remove",targetType:"section",targetId:"home/case-list",summary:"删除首页案例模块"})):(N(a,"cases","案例展示","/cases"),T(a,f("case-list","客户案例展示","补充客户案例、项目成果和交付证明")),r.push("已补充案例展示页面"),o.push({op:"add",targetType:"page",targetId:"cases",summary:"新增案例展示页面"}),o.push({op:"add",targetType:"section",targetId:"home/case-list",summary:"在首页增加案例模块"}))),s.includes("解决方案")&&(s.includes("删除")||s.includes("去掉")?(k(a,"solutions"),r.push("已移除解决方案页面"),o.push({op:"remove",targetType:"page",targetId:"solutions",summary:"删除解决方案页面"})):(N(a,"solutions","解决方案","/solutions"),r.push("已补充解决方案页面"),o.push({op:"add",targetType:"page",targetId:"solutions",summary:"新增解决方案页面"}))),s.includes("关于我们")&&(s.includes("删除")||s.includes("去掉"))&&(k(a,"about-us"),r.push("已移除关于我们页面"),o.push({op:"remove",targetType:"page",targetId:"about-us",summary:"删除关于我们页面"})),(s.includes("faq")||s.includes("常见问题"))&&(s.includes("删除")||s.includes("去掉")?(P(a,"faq"),r.push("已移除首页 FAQ 模块"),o.push({op:"remove",targetType:"section",targetId:"home/faq",summary:"删除首页 FAQ 模块"})):(T(a,f("faq","常见问题","补充用户常见问题、交付说明和购买顾虑解答")),r.push("已增加首页 FAQ 模块"),o.push({op:"add",targetType:"section",targetId:"home/faq",summary:"新增首页 FAQ 模块"}))),(s.includes("时间线")||s.includes("历程"))&&(T(a,f("timeline","发展历程","用时间线展示品牌发展、关键里程碑和成长节点")),r.push("已增加首页发展历程模块"),o.push({op:"add",targetType:"section",targetId:"home/timeline",summary:"新增首页发展历程模块"})),s.includes("联系")&&(s.includes("强化")||s.includes("突出")||s.includes("增加"))&&(T(a,f("contact-form","立即咨询","强化询盘转化入口、预约演示和线索收集表单")),r.push("已强化首页联系转化模块"),o.push({op:"add",targetType:"section",targetId:"home/contact-form",summary:"强化首页联系转化模块"})),a.version=Number(a.version||1)+1,a.dsl={version:a.version,siteMeta:{...a.siteMeta},themeTokens:{...a.themeTokens},pages:a.pages},r.length===0&&(r.push("未识别到明确结构变更，已保留当前站点规划"),o.push({op:"update",targetType:"section",targetId:"noop",summary:"保留当前结构，仅记录微调指令"}));const i=r.join("；");return a.changeLog=Array.isArray(a.changeLog)?a.changeLog:[],a.changeLog.unshift({version:a.version,instruction:j(t),summary:i,createdAt:new Date().toISOString(),patches:o}),a.changeLog=a.changeLog.slice(0,12),{sitePlan:a,summary:i,patches:o}}const x=new U;x.use("*",F());async function xe(e,t){try{const a=new URL("/api/v1/p/schema/all",e.req.url).toString(),s=await fetch(a);if(!s.ok)throw new Error("Schema fetch returned non-200");const r=await s.json().catch(()=>({})),o=r?.success&&Array.isArray(r?.models)?r.models.reduce((i,n)=>{const l=String(n?.modelSlug||n?.slug||"").trim();return l&&(i[l]=Array.isArray(n?.fields)?n.fields:[]),i},{}):{};if(Object.keys(o).length>0)return{source:"schema_all",schemaMap:o};throw new Error("Schema fetch returned empty data")}catch{const s={};try{const r=await t.prepare("SELECT slug, fields_json FROM models ORDER BY id ASC").all(),o=Array.isArray(r?.results)?r.results:[];for(const i of o){const n=String(i?.slug||"").trim();if(n)try{s[n]=i?.fields_json?JSON.parse(String(i.fields_json)):[]}catch{s[n]=[]}}}catch{s.category=[]}return{source:"db_fallback",schemaMap:s}}}async function v(e){e&&(await e.prepare(`
    CREATE TABLE IF NOT EXISTS le_system_deploy_projects (
      id TEXT PRIMARY KEY,
      site_slug TEXT NOT NULL,
      r2_file_key TEXT,
      memo TEXT,
      created_at TEXT NOT NULL
    )
  `).run(),await e.prepare(`
    CREATE TABLE IF NOT EXISTS le_system_deploy_drafts (
      id TEXT PRIMARY KEY,
      site_slug TEXT NOT NULL,
      r2_file_key TEXT,
      memo TEXT,
      created_at TEXT NOT NULL
    )
  `).run(),await e.prepare(`
    CREATE TABLE IF NOT EXISTS le_system_deploy_deployments (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL,
      pages_project_name TEXT NOT NULL,
      branch TEXT NOT NULL,
      status TEXT NOT NULL,
      deployment_url TEXT,
      bundle_object_key TEXT,
      custom_domain TEXT,
      message TEXT,
      response_json TEXT,
      created_at TEXT NOT NULL
    )
  `).run())}x.get("/init",async e=>{const t=e.env.DB;return await v(t),e.json({code:"OK",message:"Lowcode tables ensured successfully (Self-healed)"})});x.post("/project/init",async e=>{try{const t=e.env.DB;await v(t);const{siteCommand:a}=await e.req.json(),s=await xe(e,t),r=L(s.schemaMap,s.source),o=[];if(r.matched.product||o.push("商品/产品管理模型 (可自定义标识为 goods, product, item 等)"),r.matched.category||o.push("品类/分类管理模型 (可自定义标识为 category, classify, type 等)"),o.length>0)return e.json({code:"SCHEMA_INCOMPLETE",missingModels:o,schemaAnalysis:r},400);const i=crypto.randomUUID(),n=D(i,a||"低代码快速建站",r);return await t.prepare(`
      INSERT INTO le_system_deploy_projects (id, site_slug, memo, created_at)
      VALUES (?, ?, ?, ?)
    `).bind(i,a,"Initial project design",new Date().toISOString()).run(),e.json({code:"OK",sitePlan:n,schemaAnalysis:r})}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message},500)}});x.post("/project/refine",async e=>{try{const t=await e.req.json().catch(()=>({})),a=j(t?.instruction||"");if(!a)return e.json({code:"BAD_REQUEST",error:"缺少 instruction"},400);const s=S(t?.sitePlan||{}),r=be(s,a);return e.json({code:"OK",sitePlan:r.sitePlan,summary:r.summary})}catch(t){return e.json({code:"REFINE_FAILED",error:t.message||"DSL 微调失败"},500)}});x.post("/project/real-samples",async e=>{try{const t=e.env.DB;await v(t);const a=await e.req.json().catch(()=>({})),s=S(a?.sitePlan||{}),r=await ce(t,s.dataBinding,3),o={...s,dataBinding:{...s.dataBinding,sampleRecords:r,updatedAt:new Date().toISOString()}};return e.json({code:"OK",sitePlan:o,sampleRecords:r})}catch(t){return e.json({code:"REAL_SAMPLE_FAILED",error:t.message||"真实记录采样失败"},500)}});x.post("/project/build-sections",async e=>{try{const t=e.env.DB;await v(t);const a=await e.req.json().catch(()=>({})),s=String(a?.projectId||"").trim(),r=a?.pagePlan||{pages:[]},o=a?.sitePlan?S(a.sitePlan):null,i=await t.prepare("SELECT * FROM le_system_deploy_projects WHERE id = ?").bind(s).first();if(!i)return e.json({code:"PROJECT_NOT_FOUND"},404);const n={},l={},u=e.env.MEDIA_BUCKET,m=i.site_slug||"",c=ne(o?.dataBinding);for(const p of r.pages){const g=[];for(const y of p.sections){const w=`${p.pageId}-${y.sectionId}`,b=q(p.pageId,y.sectionId,y.title,y.description||"",m,{dataMode:c.mode,bindingLabel:c.bindingLabel,sampleRecords:Array.isArray(o?.dataBinding?.sampleRecords)?o.dataBinding.sampleRecords:[]});g.push(b);const I=`projects/${s}/${w}.html`;await u.put(I,b,{httpMetadata:{contentType:"text/html"}});const B=`/api/v1/plugins/proxy/lowcode-deployer/preview/${I}`;n[w]={previewUrl:B,summary:`${y.description||"积木区块准备就绪"} · ${c.modeLabel}`}}const d=`projects/${s}/pages/${p.pageId}.html`,h=O(p.pageName||p.pageId,g);await u.put(d,h,{httpMetadata:{contentType:"text/html"}}),l[p.pageId]={pageName:p.pageName||p.pageId,previewUrl:`/api/v1/plugins/proxy/lowcode-deployer/preview/${d}`,summary:`${Array.isArray(p.sections)?p.sections.length:0} 个模块已组合为整页预览 · ${c.modeLabel}`}}return await t.prepare("UPDATE le_system_deploy_projects SET r2_file_key = ? WHERE id = ?").bind(`projects/${s}/`,s).run(),e.json({code:"OK",htmlStore:n,pageStore:l})}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message},500)}});x.post("/section/refine",async e=>{try{const{projectId:t,pageId:a,sectionId:s,instruction:r}=await e.req.json(),o=e.env.MEDIA_BUCKET,i=`projects/${t}/${a}-${s}.html`,n=await o.get(i);if(!n)return e.json({code:"HTML_NOT_FOUND",error:"区块源码尚未生成，请先执行批量构建"},404);const l=await n.text(),u=H(l,r);await o.put(i,u,{httpMetadata:{contentType:"text/html"}});const m=`/api/v1/plugins/proxy/lowcode-deployer/preview/${i}?t=${Date.now()}`;return e.json({code:"OK",previewUrl:m,message:"Section refined successfully (RegEx injected)"})}catch(t){return e.json({code:"REFINE_FAILED",error:t.message},500)}});x.post("/drafts/save",async e=>{try{const t=e.env.DB;await v(t);const{draftId:a,sitePlan:s,htmlStore:r,metadata:o}=await e.req.json(),i=a||crypto.randomUUID(),n=e.env.MEDIA_BUCKET,l=`drafts/${i}.json`,u=JSON.stringify({sitePlan:s,htmlStore:r,metadata:o});return await n.put(l,u,{httpMetadata:{contentType:"application/json"}}),await t.prepare(`
      INSERT OR REPLACE INTO le_system_deploy_drafts (id, site_slug, r2_file_key, memo, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(i,o?.siteSlug||"lowcode-site",l,o?.memo||"云端视觉资产草稿",o?.createdAt||new Date().toISOString()).run(),e.json({code:"CREATED",draftId:i,message:"Draft saved successfully into R2时光机"},201)}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message},500)}});x.get("/drafts/load/:draftId",async e=>{try{const{draftId:t}=e.req.param(),a=e.env.MEDIA_BUCKET,s=`drafts/${t}.json`,r=await a.get(s);if(!r)return e.json({code:"DRAFT_NOT_FOUND",error:"草稿文件在云端不存在"},404);const o=await r.json();return e.json({code:"OK",draft:o})}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message},500)}});x.get("/drafts/list",async e=>{try{const t=e.env.DB;await v(t);const a=await t.prepare(`
      SELECT id, site_slug, r2_file_key, memo, created_at
      FROM le_system_deploy_drafts
      ORDER BY created_at DESC
    `).all();return e.json({code:"OK",drafts:a.results||[]})}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message},500)}});x.get("/deployments/:projectId",async e=>{try{const t=e.env.DB;await v(t);const a=String(e.req.param("projectId")||"").trim();if(!a)return e.json({code:"BAD_REQUEST",error:"缺少 projectId"},400);const s=await t.prepare(`
      SELECT id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at
      FROM le_system_deploy_deployments
      WHERE project_id = ?
      ORDER BY created_at DESC
      LIMIT 10
    `).bind(a).all(),r=Array.isArray(s?.results)?s.results.map(o=>{let i=null;try{i=o?.response_json?JSON.parse(String(o.response_json)):null}catch{i=null}return{id:o?.id||"",projectId:o?.project_id||"",projectName:o?.pages_project_name||"",branch:o?.branch||"main",status:o?.status||"unknown",deploymentUrl:o?.deployment_url||"",bundleObjectKey:o?.bundle_object_key||"",customDomain:o?.custom_domain||"",message:o?.message||"",response:i,createdAt:o?.created_at||""}}):[];return e.json({code:"OK",deployments:r})}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message||"部署历史读取失败"},500)}});x.get("/deployment-record/:deploymentId",async e=>{try{const t=e.env.DB;await v(t);const a=String(e.req.param("deploymentId")||"").trim();if(!a)return e.json({code:"BAD_REQUEST",error:"缺少 deploymentId"},400);const s=await t.prepare(`
      SELECT id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at
      FROM le_system_deploy_deployments
      WHERE id = ?
      LIMIT 1
    `).bind(a).first();if(!s)return e.json({code:"NOT_FOUND",error:"部署记录不存在"},404);let r=null;try{r=s?.response_json?JSON.parse(String(s.response_json)):null}catch{r=null}return e.json({code:"OK",deployment:{id:s?.id||"",projectId:s?.project_id||"",projectName:s?.pages_project_name||"",branch:s?.branch||"main",status:s?.status||"unknown",deploymentUrl:s?.deployment_url||"",bundleObjectKey:s?.bundle_object_key||"",customDomain:s?.custom_domain||"",message:s?.message||"",response:r,createdAt:s?.created_at||""}})}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message||"部署详情读取失败"},500)}});x.post("/project/export-astro-plan",async e=>{try{const{projectId:t,sitePlan:a,htmlStore:s}=await e.req.json();if(!t||!a||typeof a!="object")return e.json({code:"BAD_REQUEST",error:"缺少 projectId 或 sitePlan"},400);const r=S(a),o=Array.isArray(r?.pages)?r.pages:[],i=Array.isArray(r?.dataBinding?.fieldMappings)?r.dataBinding.fieldMappings:[],n=Array.isArray(r?.dataBinding?.sampleRecords)?r.dataBinding.sampleRecords:[],l=o.map(c=>{const p=c.pageId==="home"?"/":`/${String(c.pageId||"").replace(/^\/+/,"")}`,g=Array.isArray(c?.sections)?c.sections.map(d=>{const h=`${c.pageId}-${d.sectionId}`,y=String(d?.type||d?.variant||d?.sectionId||"section"),w=i.find(b=>/product|goods|item|commodity|prod/i.test(String(b?.sourceModel||""))?/product|list|catalog/i.test(y):/category|classify|catalog|type/i.test(String(b?.sourceModel||""))&&/category|nav|filter/i.test(y))||null;return{sectionId:d.sectionId,title:d.title,description:d.description||"",type:d.type||"generic",variant:d.variant||"",props:d.props||{},bindings:d.bindings||{},previewUrl:s?.[h]?.previewUrl||"",summary:s?.[h]?.summary||d.description||"",astroComponent:y.includes("hero")?"HeroSection":y.includes("product")||y.includes("list")?"ProductGridSection":y.includes("about")?"AboutSection":y.includes("feature")?"FeatureSection":y.includes("contact")||y.includes("form")?"ContactSection":"PreviewSection",dataSource:w?{sourceModel:w.sourceModel,fields:w.fields,status:w.status}:null}}):[];return{pageId:c.pageId,pageName:c.pageName,routePath:p,seo:{title:`${c.pageName||c.pageId} | ${r?.siteMeta?.siteName||"Astro Site"}`,description:r?.siteBrief?.summary||""},sections:g}}),u={version:1,projectId:t,generatedAt:new Date().toISOString(),siteMeta:r.siteMeta,siteBrief:r.siteBrief,themeTokens:r.themeTokens,dsl:r.dsl,dataBinding:r.dataBinding,schemaAnalysis:r.schemaAnalysis,pages:l,delivery:{preferredRenderer:"astro_template_adapter",templateRoot:"src/plugins/lowcode-deployer/astro-template",mockMode:r?.dataBinding?.mode!=="real",nextAction:"将 handoff.pages 与 dsl.pages 渲染到 Astro 模板页面，并接入 dataBinding 适配层"}},m={projectId:t,templateRoot:"src/plugins/lowcode-deployer/astro-template",templateFiles:J,generatedAt:u.generatedAt,entryPage:l[0]?.routePath||"/",pages:l,handoff:u,handoffSummary:{siteName:r?.siteMeta?.siteName||"",pageCount:l.length,dataMode:r?.dataBinding?.mode||"mock",mappedModelCount:i.length,sampleModelCount:n.filter(c=>Array.isArray(c?.items)&&c.items.length>0).length,sampleRecordCount:n.reduce((c,p)=>c+Number(p?.items?.length||0),0)},adapters:{layout:"BaseLayout.astro",fallbackSectionComponent:"PreviewSection.astro",recommendedDataModule:"src/lib/lowcode-site.ts"}};return e.json({code:"OK",astroPlan:m})}catch(t){return e.json({code:"INTERNAL_ERROR",error:t.message},500)}});x.post("/project/export-astro-files",async e=>{try{const t=e.env.MEDIA_BUCKET,a=await e.req.json().catch(()=>({})),s=String(a?.projectId||"").trim(),r=a?.sitePlan,o=a?.astroPlan;if(!s||!r||typeof r!="object")return e.json({code:"BAD_REQUEST",error:"缺少 projectId 或 sitePlan"},400);let i=o;if(!i||typeof i!="object"){const c=S(r),p=Array.isArray(c?.pages)?c.pages:[];i={projectId:s,generatedAt:new Date().toISOString(),pages:p.map(g=>({pageId:g.pageId,pageName:g.pageName,routePath:g.routePath,seo:{title:`${g.pageName||g.pageId} | ${c?.siteMeta?.siteName||"Astro Site"}`,description:c?.siteBrief?.summary||""},sections:Array.isArray(g?.sections)?g.sections.map(d=>({sectionId:d.sectionId,title:d.title,description:d.description||"",summary:d.description||"",previewUrl:"",astroComponent:"PreviewSection"})):[]})),handoff:{projectId:s,siteMeta:c.siteMeta,siteBrief:c.siteBrief,themeTokens:c.themeTokens,dsl:c.dsl,dataBinding:c.dataBinding,schemaAnalysis:c.schemaAnalysis,pages:p}}}const n=re(s,i),l=crypto.randomUUID(),u=`exports/${s}/astro/${l}.json`,m={exportId:l,projectId:s,generatedAt:new Date().toISOString(),fileCount:n.length,files:n};return await t.put(u,JSON.stringify(m,null,2),{httpMetadata:{contentType:"application/json"}}),e.json({code:"OK",exportId:l,objectKey:u,files:n,summary:{fileCount:n.length,pageCount:Array.isArray(i?.pages)?i.pages.length:0}})}catch(t){return e.json({code:"EXPORT_FAILED",error:t.message||"Astro 工程文件导出失败"},500)}});x.post("/project/lock-and-deploy",async e=>{try{const t=e.env.DB;await v(t);const a=e.env.MEDIA_BUCKET,s=await e.req.json().catch(()=>({})),r=String(s?.projectId||"").trim();if(!r)return e.json({code:"BAD_REQUEST",error:"缺少 projectId"},400);const o=S(s?.sitePlan||{}),i=s?.astroPlan||{},n=s?.deployConfig&&typeof s.deployConfig=="object"?s.deployConfig:{},l=String(n?.branch||"main").trim()||"main",u=String(n?.customDomain||"").trim(),m=Y(n?.projectName||o?.siteMeta?.siteName||r),c=await G(a,r,o,i),p=crypto.randomUUID(),g=`deployments/${r}/${p}/bundle.json`,d={deployId:p,projectId:r,projectName:m,branch:l,generatedAt:new Date().toISOString(),fileCount:c.length,files:c.map(b=>({path:b.path,size:b.content.length,contentType:$(b.path)})),handoffSummary:i?.handoffSummary||null};await a.put(g,JSON.stringify(d,null,2),{httpMetadata:{contentType:"application/json"}});const h={deployId:p,projectName:m,branch:l,fileCount:c.length,bundleObjectKey:g,pagesDomain:`https://${m}.pages.dev`,customDomain:u},y=String(e.env.CF_ACCOUNT_ID||"").trim(),w=String(e.env.CF_API_TOKEN||"").trim();if(!y||!w)return await t.prepare(`
        INSERT INTO le_system_deploy_deployments (id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(p,r,m,l,"package_ready",h.pagesDomain,g,u,"发布包已生成，但当前环境未配置 Cloudflare 凭证。",JSON.stringify({packageInfo:h}),new Date().toISOString()).run(),e.json({code:"PACKAGE_READY",message:"发布包已生成，但当前环境未配置 CF_ACCOUNT_ID / CF_API_TOKEN，暂未执行 Pages 直传部署。",packageInfo:h});try{await V(y,w,m,l);const b=await W(y,w,m,l,c);return await t.prepare(`
        INSERT INTO le_system_deploy_deployments (id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(p,r,m,l,"deployed",b?.url||h.pagesDomain,g,u,"项目已发布到 Cloudflare Pages。",JSON.stringify({packageInfo:h,deployment:b}),new Date().toISOString()).run(),e.json({code:"DEPLOYED",message:"项目已发布到 Cloudflare Pages。",deploymentUrl:b?.url||h.pagesDomain,packageInfo:h,deployment:b})}catch(b){return await t.prepare(`
        INSERT INTO le_system_deploy_deployments (id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(p,r,m,l,"failed",h.pagesDomain,g,u,b?.message||"Pages 直传部署失败",JSON.stringify({packageInfo:h,error:b?.message||"Pages 直传部署失败"}),new Date().toISOString()).run(),e.json({code:"PACKAGE_READY",message:"发布包已生成，但 Pages 直传部署失败。可继续使用发布包手动发布。",error:b?.message||"Pages 直传部署失败",packageInfo:h})}}catch(t){return e.json({code:"DEPLOY_FAILED",error:t.message||"发布失败"},500)}});x.get("/preview/*",async e=>{try{const t=e.env.MEDIA_BUCKET,s=new URL(e.req.url).pathname.replace("/api/v1/plugins/proxy/lowcode-deployer/preview/",""),r=await t.get(s);if(!r)return e.html(`
        <div style="font-family:sans-serif;padding:40px;text-align:center;color:#64748b;">
          <h2>⚠️ 预览文件未就绪 (404)</h2>
          <p>文件 ${s} 尚未在 R2 存储桶中上传。请先在工作台中点击构建区块按钮。</p>
        </div>
      `,404);const o=await r.text();return e.html(o)}catch(t){return e.text("Preview proxy error: "+t.message,500)}});const je={admin:x,storefront:void 0,init:async e=>{try{await v(e)}catch{}}};export{je as default};
