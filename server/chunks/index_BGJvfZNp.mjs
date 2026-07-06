globalThis.process ??= {};
globalThis.process.env ??= {};
import { H as Hono } from "./hono_C7UaUXH7.mjs";
import { c as cors } from "./index_oKH0goKJ.mjs";
function pickSampleGroup(sampleRecords, matcher) {
  return (Array.isArray(sampleRecords) ? sampleRecords : []).find(
    (group) => matcher.test(String(group?.sourceModel || ""))
  ) || null;
}
function buildPreviewData(baseData, options) {
  const dataMode = options?.dataMode === "real" ? "real" : "mock";
  if (dataMode !== "real") {
    return baseData;
  }
  const productGroup = pickSampleGroup(options?.sampleRecords, /product|goods|item|commodity|prod/i);
  const categoryGroup = pickSampleGroup(options?.sampleRecords, /category|classify|catalog|type/i);
  const categoryLabels = Array.isArray(categoryGroup?.items) ? categoryGroup.items.map((item) => String(item?.title || item?.name || item?.description || "").trim()).filter(Boolean) : [];
  const realProducts = Array.isArray(productGroup?.items) ? productGroup.items.slice(0, 3).map((item, index2) => {
    const title = String(item?.title || item?.name || `真实产品 ${index2 + 1}`).trim();
    const imageCandidate = String(item?.image || item?.cover || "").trim();
    const relation = String(item?.relation || "").trim();
    const description = String(item?.description || "").trim();
    const price = String(item?.price || "").trim();
    return {
      name: title || `真实产品 ${index2 + 1}`,
      specs: [description, price ? `价格: ${price}` : "", relation ? `分类: ${relation}` : ""].filter(Boolean).join(" | ") || "已接入真实记录样本",
      image: imageCandidate && /^https?:\/\//i.test(imageCandidate) ? imageCandidate : baseData.products[index2 % baseData.products.length]?.image || baseData.products[0].image,
      tag: relation || categoryLabels[index2] || "真实记录"
    };
  }) : [];
  if (realProducts.length === 0) {
    return {
      ...baseData,
      slogan: `${baseData.slogan} 当前预览已切换到真实字段模式。`,
      description: `${baseData.description} 当前页面已接入真实字段契约，但系统内暂未采样到可用实体记录，预览仍保留 Mock 内容兜底。`
    };
  }
  const productTotal = Number(productGroup?.total || realProducts.length);
  const categoryTotal = Number(categoryGroup?.total || categoryLabels.length);
  return {
    ...baseData,
    slogan: `当前站点已接入 ${productTotal} 条真实产品数据，正在按真实字段契约生成预览`,
    description: `当前页面已切换到真实字段模式，已采样 ${productTotal} 条产品记录${categoryTotal ? ` 与 ${categoryTotal} 条分类记录` : ""}，下方模块优先展示系统真实实体数据。`,
    products: realProducts,
    features: [
      { title: "真实字段映射", desc: "当前页面已按系统实体字段自动完成标题、图片、描述、价格等字段绑定。", icon: "🔗" },
      { title: "真实记录采样", desc: `已注入 ${productTotal} 条最新实体记录作为页面预览样本。`, icon: "📦" },
      { title: "后续可继续扩展", desc: "下一步可继续接入分页、分类筛选和更多真实模块。", icon: "🚀" }
    ]
  };
}
const INDUSTRY_DATA_STORE = {
  bearing: {
    companyName: "钛睿精密轴承工业 (Triton Precision Bearings)",
    slogan: "极端工况下的坚贞运转，让世界感知精密的力量",
    description: "钛睿精密轴承（Triton Precision）致力于超高速、耐腐蚀、高承载的特种陶瓷与合金轴承研发。为全球航天航空、精密机床、风力发电等大奢工业场景提供零缺陷的旋转自愈控制系统。",
    features: [
      { title: "纳米陶瓷自润滑", desc: "采用氮化硅特种陶瓷滚珠，在无润滑油极端状态下寿命提升400%。", icon: "💎" },
      { title: "P2级超高精密级精度", desc: "全线产品达到国家标准P2级（ISO Class 2）精度控制，径向跳动小于1.5微米。", icon: "📐" },
      { title: "零温升高速锁固", desc: "专利热应力消除保持架设计，在每分钟数万转高速下温升几乎为零。", icon: "⚡" }
    ],
    products: [
      { name: "TR-9020 特种超精密主轴陶瓷轴承", specs: "内径100mm | 极限转速38,000rpm | 陶瓷混合滚珠", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", tag: "航天级" },
      { name: "TR-H7104 高承载角接触抗振轴承", specs: "高速机床专用 | 预载荷锁定 | 零噪音运转", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&q=80", tag: "精密机床" },
      { name: "TR-W33 自调心抗挤压风电重载轴承", specs: "海上风电专用 | 高耐盐雾腐蚀涂层 | 30年免维护", image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80", tag: "风力发电" }
    ],
    contactEmail: "tech@triton-bearing.com",
    phone: "+86 (21) 8876-5432",
    address: "上海市张江高科技园区精密智造港 8 号楼"
  },
  valve: {
    companyName: "大奢威隆控制阀门 (Veyron Control Valves)",
    slogan: "驭流防爆，滴水不漏，为大国重器系上安全带",
    description: "威隆控制阀门深耕流体精密控制30年。在深海高压、超高温熔盐、强腐蚀核工业等苛刻管网上，以严丝合缝的密封自愈工艺，为全球化工航母护航。",
    features: [
      { title: "三偏心金属硬密封", desc: "专利耐冲刷密封面，零泄漏级别可达 ANSI Class VI 级，高温无咬死。", icon: "🛡️" },
      { title: "防爆智能自愈执行机构", desc: "内置边缘微处理器，实时诊断阀门卡涩、填料泄漏并在线预警。", icon: "🧠" },
      { title: "特种钛合金铸造", desc: "对标核电级工艺，可耐受 1200℃ 超高温度与 30Mpa 极端压差。", icon: "🔥" }
    ],
    products: [
      { name: "VR-800F 高压防爆气动调节阀", specs: "公称通径DN250 | 压力等级PN100 | 等百分比流量特性", image: "https://images.unsplash.com/photo-1581092162384-8987c17d4e26?auto=format&fit=crop&w=600&q=80", tag: "核石化" },
      { name: "VR-5100 超温熔盐自平衡切断阀", specs: "光热发电专用 | 耐750℃超高温 | 零泄露高回座", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", tag: "新能源" },
      { name: "VR-W903 强腐蚀性衬氟特种球阀", specs: "高分子PTFE衬里 | 零缝隙耐氯碱强酸 | 手气电动可选", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80", tag: "高耐腐" }
    ],
    contactEmail: "inquiry@veyron-valve.com",
    phone: "+86 (10) 6688-9999",
    address: "北京市亦庄经济技术开发区重工业园A区"
  },
  trading: {
    companyName: "高奢寰宇奢雅贸易 (Aether Lux Global Trading)",
    slogan: "连接全球奢华美学，为精英阶层定制生活范式",
    description: "寰宇奢雅是一家面向欧美中东高净值客群的全球高端买手贸易公司。我们跨越艺术、高端家具与新奢面料界限，把传承百年的奢石工艺与先锋设计美学送抵您的生活空间。",
    features: [
      { title: "100% 意大利矿山直采", desc: "独家签约阿尔卑斯矿区，提供带有天然冰裂自愈美感的稀缺奢石珍品。", icon: "⚜️" },
      { title: "艺术大师限量联名", desc: "每季合作米兰先锋艺术家，让日常生活用品升华成为馆藏级艺术资产。", icon: "🎨" },
      { title: "全流程私密管家护送", desc: "恒温包机运输，全程VIP双通道报关，保证完好无损地优雅落位。", icon: "🍷" }
    ],
    products: [
      { name: "AETHER-01 纯手工打磨天然白玉大理石茶几", specs: "独版天然花纹 | 莫氏硬度6级防刮 | 24K真金镀底座", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80", tag: "馆藏级" },
      { name: "AETHER-09 意式极简安哥拉羊绒云端单人椅", specs: "手工真皮绗缝 | 记忆羽绒填充 | 符合大奢人体工程学", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80", tag: "意式极简" },
      { name: "AETHER-05 限量版高透水管防爆香薰氛围台灯", specs: "吹制有色水晶 | 专利防尘防爆散热 | 无极触控调光", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80", tag: "设计师联名" }
    ],
    contactEmail: "vip@aether-lux.com",
    phone: "+86 (21) 9876-1234",
    address: "上海市静安区南京西路大奢写字楼 66 层"
  }
};
function buildHtmlSection(pageId, sectionId, title, description, siteCommand, options) {
  let industry = "trading";
  const cmd = siteCommand.toLowerCase();
  if (cmd.includes("轴承") || cmd.includes("bearing") || cmd.includes("精密") || cmd.includes("机械")) {
    industry = "bearing";
  } else if (cmd.includes("阀门") || cmd.includes("valve") || cmd.includes("调节阀") || cmd.includes("工业")) {
    industry = "valve";
  } else if (cmd.includes("外贸") || cmd.includes("大奢") || cmd.includes("奢华") || cmd.includes("贸易") || cmd.includes("公司")) {
    industry = "trading";
  }
  const data = buildPreviewData(INDUSTRY_DATA_STORE[industry], options);
  const dataMode = options?.dataMode === "real" ? "real" : "mock";
  const modeLabel = dataMode === "real" ? "真实字段模式" : "Mock 数据模式";
  const bindingLabel = options?.bindingLabel || "使用符合真实模型结构的 Mock 数据进行预览";
  let sectionContent = "";
  if (sectionId.includes("hero")) {
    sectionContent = `
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
            ${data.companyName}
          </h1>
          
          <p class="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light duration-1000 delay-200 transform transition-all"
             :class="loaded ? 'opacity-100' : 'opacity-0 translate-y-4'">
            "${data.slogan}"
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
    `;
  } else if (sectionId.includes("feature")) {
    sectionContent = `
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
            ${data.features.map((feat, i) => `
              <div class="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div class="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  ${feat.icon}
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">${feat.title}</h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${feat.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  } else if (sectionId.includes("about")) {
    sectionContent = `
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
                ${data.description}
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
                <img src="${data.products[0].image}" alt="高奢工艺" class="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent text-white">
                  <p class="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-1">物理自愈现场</p>
                  <p class="text-sm text-slate-200">全智能温升自适应抗挤压阀座/轴承运行展示仪</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (sectionId.includes("product") || sectionId.includes("list")) {
    sectionContent = `
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
              ${Array.from(new Set(data.products.map((p) => p.tag))).map((tag) => `
                <button class="px-4 py-2 text-xs font-semibold rounded-lg transition-all"
                        :class="selectedTag === '${tag}' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'"
                        @click="selectedTag = '${tag}'">
                  ${tag}
                </button>
              `).join("")}
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${data.products.map((prod, idx) => `
              <div class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-3xl shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
                   x-show="selectedTag === 'all' || selectedTag === '${prod.tag}'"
                   x-transition:enter="transition ease-out duration-300"
                   x-transition:enter-start="opacity-0 scale-95"
                   x-transition:enter-end="opacity-100 scale-100">
                <div class="relative overflow-hidden h-64 bg-slate-100">
                  <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span class="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 text-white text-[12px] uppercase tracking-widest font-extrabold rounded-full shadow-md backdrop-blur-sm">
                    ${prod.tag}
                  </span>
                </div>
                <div class="p-6 space-y-4">
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    ${prod.name}
                  </h3>
                  <p class="text-xs text-slate-400 font-mono tracking-tight bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                    ${prod.specs}
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
    `;
  } else if (sectionId.includes("contact") || sectionId.includes("form")) {
    sectionContent = `
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
                    <p class="text-white font-medium">${data.contactEmail}</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white text-lg">☎️</div>
                  <div>
                    <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold">快速响应热线</p>
                    <p class="text-white font-medium">${data.phone}</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white text-lg">📍</div>
                  <div>
                    <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold">物理智造总部</p>
                    <p class="text-white font-medium">${data.address}</p>
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
    `;
  } else {
    sectionContent = `
      <section class="py-16 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div class="max-w-5xl mx-auto text-center space-y-4">
          <h2 class="text-2xl font-bold text-slate-800 dark:text-white">${title}</h2>
          <p class="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">${description}</p>
          <div class="p-6 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-slate-400 text-xs">
             [ 物理静态区块 ${sectionId} 准备就绪 ]
          </div>
        </div>
      </section>
    `;
  }
  const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${data.companyName}</title>
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
        <div class="text-[11px] font-semibold uppercase tracking-wider text-blue-300">${modeLabel}</div>
        <div class="text-[11px] text-slate-300">${bindingLabel}</div>
      </div>
    </div>
  ${sectionContent}
</body>
</html>`;
  return fullHtml;
}
function refineHtmlSection(rawHtml, instruction) {
  let refined = rawHtml;
  const inst = instruction.toLowerCase();
  if (inst.includes("黑金") || inst.includes("dark") || inst.includes("color") || inst.includes("配色") || inst.includes("深色")) {
    refined = refined.replace(/bg-slate-50/g, "bg-slate-950").replace(/bg-white/g, "bg-slate-900").replace(/text-slate-800/g, "text-slate-100").replace(/text-slate-900/g, "text-amber-400").replace(/text-slate-600/g, "text-slate-300").replace(/text-slate-500/g, "text-slate-400").replace(/from-blue-600 to-indigo-600/g, "from-amber-500 to-yellow-600").replace(/from-blue-500 to-indigo-500/g, "from-amber-600 to-yellow-500").replace(/bg-blue-600/g, "bg-amber-500").replace(/text-blue-600/g, "text-amber-400").replace(/border-blue-500\/30/g, "border-amber-500/30").replace(/bg-blue-500\/10/g, "bg-amber-500/10").replace(/text-blue-400/g, "text-amber-400").replace(/bg-blue-50/g, "bg-amber-500/10").replace(/zero-friction spinning/g, "zero-friction spinning under amber light").replace(/💎/g, "⚜️");
  }
  if (inst.includes("文案") || inst.includes("text") || inst.includes("write") || inst.includes("重写") || inst.includes("高奢")) {
    refined = refined.replace(/核心优势与卓越工艺/g, "皇家御用级精密防爆流体控制核心").replace(/卓越智造，始于微米之间的执着与自愈防爆密封技术/g, "至臻美学与极端物理耐压公差自愈工艺的极致凝结").replace(/我们以毫秒级微小公差和尖端防爆设计/g, "我们以航天级精密控制，无惧超高温熔盐强腐蚀，确保全网零泄露").replace(/浏览高奢产品线/g, "品鉴高奢工业艺术品");
  }
  if (inst.includes("特效") || inst.includes("glass") || inst.includes("磨砂") || inst.includes("动态")) {
    refined = refined.replace(/<\/head>/, `
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
</head>`);
  }
  if (!inst.includes("配色") && !inst.includes("黑金") && !inst.includes("特效") && !inst.includes("文案") && instruction.length > 3) {
    const titleMatch = instruction.match(/(?:标题改成|标题改为|命名为|改成|改为)['"“]([^'”"”]+)['"”]/);
    if (titleMatch && titleMatch[1]) {
      const newTitle = titleMatch[1];
      refined = refined.replace(/<h1[^>]*>([^<]+)<\/h1>/g, `<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-blue-200">${newTitle}</h1>`);
      refined = refined.replace(/<h2[^>]*>([^<]+)<\/h2>/g, `<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">${newTitle}</h2>`);
    } else {
      refined = refined.replace(/<body>/, `<body>
  <!-- 💡 系统级数字员工小气泡提示：已根据您的微调指令 “${instruction}” 在 0ms 边缘内存执行了代码正则灌入与视觉热重构！ -->`);
    }
  }
  return refined;
}
const ASTRO_TEMPLATE_FILES = [
  "README.md",
  "package.json",
  "astro.config.mjs",
  "src/layouts/BaseLayout.astro",
  "src/components/PreviewSection.astro",
  "src/pages/index.astro"
];
function extractBodyHtml(documentHtml) {
  const match = documentHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match?.[1]?.trim() || documentHtml;
}
function buildPagePreviewHtml(pageName, sectionDocuments) {
  const sectionBodies = sectionDocuments.map((html) => extractBodyHtml(html)).filter(Boolean).join("\n");
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageName} | lowcode-deployer 预览</title>
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
  ${sectionBodies}
</body>
</html>`;
}
function ensureLeadingSlash(value) {
  const normalized = String(value || "").trim();
  if (!normalized) return "/";
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}
function normalizePagesProjectName(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 58) || `lowcode-site-${crypto.randomUUID().slice(0, 6)}`;
}
function detectContentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".json")) return "application/json; charset=utf-8";
  if (filePath.endsWith(".txt")) return "text/plain; charset=utf-8";
  return "application/octet-stream";
}
async function ensurePagesProject(accountId, apiToken, projectName, productionBranch) {
  const baseUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects`;
  const headers = {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json"
  };
  const getRes = await fetch(`${baseUrl}/${projectName}`, { headers });
  const getJson = await getRes.json().catch(() => ({}));
  if (getRes.ok && getJson?.success) {
    return {
      created: false,
      project: getJson.result
    };
  }
  const createRes = await fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: projectName,
      production_branch: productionBranch
    })
  });
  const createJson = await createRes.json().catch(() => ({}));
  if (!createRes.ok || createJson?.success === false) {
    throw new Error(createJson?.errors?.[0]?.message || createJson?.message || "创建 Pages 项目失败");
  }
  return {
    created: true,
    project: createJson?.result || null
  };
}
async function uploadPagesDeployment(accountId, apiToken, projectName, branch, files) {
  const form = new FormData();
  form.set("branch", branch);
  for (const file of files) {
    form.append(
      file.path,
      new File([file.content], file.path.split("/").pop() || "file", {
        type: detectContentType(file.path)
      }),
      file.path
    );
  }
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/deployments`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`
      },
      body: form
    }
  );
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json?.success === false) {
    throw new Error(json?.errors?.[0]?.message || json?.message || "Pages 直传部署失败");
  }
  return json?.result || null;
}
async function buildDeployFiles(bucket, projectId, sitePlan, astroPlan) {
  const normalizedPlan = normalizeSitePlan(sitePlan);
  const pages = Array.isArray(normalizedPlan?.pages) ? normalizedPlan.pages : [];
  const files = [];
  for (const page of pages) {
    const objectKey = `projects/${projectId}/pages/${page.pageId}.html`;
    const obj = await bucket.get(objectKey);
    const pageHtml = obj ? await obj.text() : buildPagePreviewHtml(page.pageName || page.pageId, []);
    const routePath = ensureLeadingSlash(page.routePath || (page.pageId === "home" ? "/" : page.pageId));
    const filePath = routePath === "/" ? "index.html" : `${routePath.replace(/^\/+/, "").replace(/\/+$/, "")}/index.html`;
    files.push({
      path: filePath,
      content: pageHtml
    });
  }
  files.push({
    path: "_headers",
    content: `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
`
  });
  files.push({
    path: "site-plan.json",
    content: JSON.stringify(normalizedPlan, null, 2)
  });
  files.push({
    path: "astro-handoff.json",
    content: JSON.stringify(astroPlan || {}, null, 2)
  });
  return files;
}
function buildAstroTemplatePackageJson() {
  return JSON.stringify({
    name: "lowcode-deployer-astro-template",
    private: true,
    version: "0.1.0",
    type: "module",
    scripts: {
      dev: "astro dev",
      build: "astro build",
      preview: "astro preview"
    },
    dependencies: {
      astro: "^5.0.0"
    }
  }, null, 2);
}
function buildAstroConfigContent() {
  return `import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
});
`;
}
function buildBaseLayoutContent() {
  return `---
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
`;
}
function buildPreviewSectionContent() {
  return `---
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
`;
}
function buildLowcodeSiteDataModule(astroPlan) {
  const handoff = astroPlan?.handoff || {};
  return `export const siteData = ${JSON.stringify(handoff, null, 2)} as const;

export function getPageById(pageId: string) {
  return siteData.pages.find((page) => page.pageId === pageId) || null;
}
`;
}
function buildGeneratedPageContent(page, routePath) {
  const importPrefix = routePath === "/" ? ".." : "../".repeat(Math.max(routePath.split("/").filter(Boolean).length, 1));
  return `---
import BaseLayout from '${importPrefix}/layouts/BaseLayout.astro';
import PreviewSection from '${importPrefix}/components/PreviewSection.astro';
import { getPageById } from '${importPrefix}/lib/lowcode-site';

const page = getPageById(${JSON.stringify(page.pageId)});
const sections = page?.sections || [];
---

<BaseLayout title={page?.seo?.title || ${JSON.stringify(page.pageName || page.pageId)}} description={page?.seo?.description || ''}>
  <header style="margin-bottom: 32px;">
    <div style="display: inline-flex; padding: 6px 10px; border-radius: 999px; background: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 600;">
      lowcode-deployer
    </div>
    <h1 style="margin: 16px 0 8px; font-size: 36px;">{page?.pageName || ${JSON.stringify(page.pageName || page.pageId)}}</h1>
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
`;
}
function buildAstroExportFiles(projectId, astroPlan) {
  const files = [
    {
      path: "package.json",
      content: buildAstroTemplatePackageJson(),
      kind: "template"
    },
    {
      path: "astro.config.mjs",
      content: buildAstroConfigContent(),
      kind: "template"
    },
    {
      path: "src/layouts/BaseLayout.astro",
      content: buildBaseLayoutContent(),
      kind: "template"
    },
    {
      path: "src/components/PreviewSection.astro",
      content: buildPreviewSectionContent(),
      kind: "template"
    },
    {
      path: "src/lib/lowcode-site.ts",
      content: buildLowcodeSiteDataModule(astroPlan),
      kind: "generated"
    },
    {
      path: "src/data/astro-handoff.json",
      content: JSON.stringify(astroPlan?.handoff || {}, null, 2),
      kind: "generated"
    }
  ];
  const pages = Array.isArray(astroPlan?.pages) ? astroPlan.pages : [];
  for (const page of pages) {
    const routePath = ensureLeadingSlash(page?.routePath || "/");
    const filePath = routePath === "/" ? "src/pages/index.astro" : `src/pages/${routePath.replace(/^\/+/, "").replace(/\/+$/, "")}.astro`;
    files.push({
      path: filePath,
      content: buildGeneratedPageContent(page, routePath),
      kind: "generated"
    });
  }
  files.push({
    path: "export-manifest.json",
    content: JSON.stringify({
      projectId,
      generatedAt: astroPlan?.generatedAt || (/* @__PURE__ */ new Date()).toISOString(),
      fileCount: files.length,
      pages: pages.map((page) => ({
        pageId: page.pageId,
        routePath: page.routePath
      }))
    }, null, 2),
    kind: "manifest"
  });
  return files;
}
function pickSchemaModel(schemaMap, keywords) {
  for (const [slug, rawFields] of Object.entries(schemaMap)) {
    const slugLower = slug.toLowerCase();
    const fieldKeys = normalizeSchemaFields(rawFields);
    const matched = keywords.some(
      (keyword) => slugLower.includes(keyword) || fieldKeys.some((field) => field.toLowerCase().includes(keyword))
    );
    if (matched) {
      return {
        slug,
        displayName: slug,
        fields: fieldKeys
      };
    }
  }
  return null;
}
function buildSchemaAnalysis(schemaMap, source) {
  const productKeywords = ["product", "goods", "item", "commodity", "spu", "sku", "prod", "产品", "商品", "货品", "单品", "货物"];
  const categoryKeywords = ["category", "classify", "type", "tag", "sort", "catalog", "kind", "分类", "类别", "分组", "品类", "栏目", "层级"];
  return {
    source,
    modelsCount: Object.keys(schemaMap).length,
    models: Object.entries(schemaMap).map(([slug, fields]) => ({
      slug,
      fieldCount: Array.isArray(fields) ? fields.length : 0
    })),
    matched: {
      product: pickSchemaModel(schemaMap, productKeywords),
      category: pickSchemaModel(schemaMap, categoryKeywords)
    }
  };
}
function buildBindingHints(schemaAnalysis) {
  const productFields = schemaAnalysis.matched.product?.fields || [];
  const categoryFields = schemaAnalysis.matched.category?.fields || [];
  return [
    {
      sourceModel: schemaAnalysis.matched.product?.slug || "product",
      usage: "产品列表、产品卡片、解决方案推荐",
      suggestedFields: [
        productFields.find((field) => /^(name|title)$/i.test(field)) || productFields.find((field) => /name|title/i.test(field)) || "name",
        productFields.find((field) => /cover|image|banner|thumb/i.test(field)) || "cover",
        productFields.find((field) => /summary|description|desc|intro/i.test(field)) || "description",
        productFields.find((field) => /price|amount/i.test(field)) || "price",
        productFields.find((field) => /category|categoryId|classify/i.test(field)) || "categoryId"
      ]
    },
    {
      sourceModel: schemaAnalysis.matched.category?.slug || "category",
      usage: "产品分类、导航筛选、栏目标签",
      suggestedFields: [
        categoryFields.find((field) => /^(name|title)$/i.test(field)) || categoryFields.find((field) => /name|title/i.test(field)) || "name",
        categoryFields.find((field) => /slug|code/i.test(field)) || "slug",
        categoryFields.find((field) => /parent/i.test(field)) || "parentId",
        categoryFields.find((field) => /sort|order|rank/i.test(field)) || "sortOrder"
      ]
    }
  ];
}
function buildFieldMappings(schemaAnalysis) {
  const hints = buildBindingHints(schemaAnalysis);
  return hints.map((hint) => ({
    sourceModel: hint.sourceModel,
    usage: hint.usage,
    status: hint.suggestedFields.some((field) => !field) ? "fallback" : "mapped",
    fields: hint.suggestedFields.reduce((acc, field, index2) => {
      const roleOrder = ["title", "image", "description", "price", "relation"];
      acc[roleOrder[index2] || `field${index2 + 1}`] = field;
      return acc;
    }, {})
  }));
}
function describeDataBinding(dataBinding) {
  const mode = dataBinding?.mode === "real" ? "real" : "mock";
  const productMapping = dataBinding?.fieldMappings?.find(
    (item) => /product|goods|item|commodity|prod/i.test(item.sourceModel)
  );
  const productTitleField = productMapping?.fields?.title || productMapping?.fields?.field1 || "name";
  const productImageField = productMapping?.fields?.image || "cover";
  return {
    mode,
    modeLabel: mode === "real" ? "真实字段模式" : "Mock 数据模式",
    bindingLabel: mode === "real" ? `按真实字段契约映射：标题=${productTitleField}，图片=${productImageField}` : "使用符合真实模型结构的 Mock 数据进行预览"
  };
}
async function resolveCollectionIdBySlug(db, slug) {
  const row = await db.prepare("SELECT id, slug, name FROM collections WHERE slug = ? LIMIT 1").bind(slug).first();
  return row ? { id: Number(row.id || 0), slug: String(row.slug || slug), name: String(row.name || slug) } : null;
}
function normalizeSampleValue(value) {
  if (value === null || value === void 0) return "";
  if (Array.isArray(value)) return value.slice(0, 3).join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}
async function buildSampleRecords(db, dataBinding, limit = 3) {
  const mappings = Array.isArray(dataBinding?.fieldMappings) ? dataBinding.fieldMappings : [];
  const sampleRecords = [];
  for (const mapping of mappings.slice(0, 2)) {
    const collection = await resolveCollectionIdBySlug(db, mapping.sourceModel);
    if (!collection?.id) {
      sampleRecords.push({ sourceModel: mapping.sourceModel, total: 0, items: [] });
      continue;
    }
    const countRow = await db.prepare("SELECT count(*) as count FROM entities WHERE collection_id = ?").bind(collection.id).first();
    const rows = await db.prepare(`
      SELECT id, data_json, locale, created_at
      FROM entities
      WHERE collection_id = ?
      ORDER BY created_at DESC, id DESC
      LIMIT ?
    `).bind(collection.id, limit).all();
    const results = Array.isArray(rows?.results) ? rows.results : [];
    const items = results.map((row) => {
      let parsed = {};
      try {
        parsed = row?.data_json ? JSON.parse(String(row.data_json)) : {};
      } catch {
        parsed = {};
      }
      const preview = {
        id: Number(row?.id || 0),
        locale: row?.locale || ""
      };
      for (const [role, field] of Object.entries(mapping.fields || {})) {
        preview[role] = normalizeSampleValue(parsed?.[String(field)]);
      }
      return preview;
    });
    sampleRecords.push({
      sourceModel: mapping.sourceModel,
      total: Number(countRow?.count || 0),
      items
    });
  }
  return sampleRecords;
}
function compactText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}
function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}
function normalizeFieldKey(field) {
  return String(field?.key || field?.name || field?.slug || field?.id || "").trim();
}
function normalizeSchemaFields(fields) {
  return Array.isArray(fields) ? fields.map((field) => normalizeFieldKey(field)).filter(Boolean) : [];
}
function detectIndustry(siteCommand) {
  const normalized = siteCommand.toLowerCase();
  if (["轴承", "bearing", "精密", "机械"].some((keyword) => normalized.includes(keyword))) {
    return {
      key: "bearing",
      label: "精密工业",
      companyName: "钛睿精密工业",
      audience: "工业采购负责人、设备制造商、海外渠道商",
      goal: "展示品牌能力、产品系列和技术实力，获取询盘与选型需求"
    };
  }
  if (["阀门", "valve", "管道", "流体", "化工"].some((keyword) => normalized.includes(keyword))) {
    return {
      key: "valve",
      label: "工业控制设备",
      companyName: "威隆流体控制",
      audience: "石化、电力、工程总包和海外工业客户",
      goal: "展示工况解决方案、核心产品和交付案例，承接采购与技术咨询"
    };
  }
  if (["外贸", "出海", "独立站", "贸易", "跨境"].some((keyword) => normalized.includes(keyword))) {
    return {
      key: "trading",
      label: "外贸品牌站",
      companyName: "寰宇品牌出海",
      audience: "海外采购商、品牌合作伙伴、渠道客户",
      goal: "快速输出国际化品牌形象站，强化产品展示和留资转化"
    };
  }
  if (["saas", "软件", "平台", "系统", "ai"].some((keyword) => normalized.includes(keyword))) {
    return {
      key: "saas",
      label: "SaaS 产品站",
      companyName: "智流云平台",
      audience: "企业决策者、业务负责人、数字化团队",
      goal: "讲清产品价值、功能能力和客户收益，推动预约演示"
    };
  }
  return {
    key: "brand",
    label: "品牌官网",
    companyName: "启域品牌科技",
    audience: "潜在客户、合作伙伴、品牌访客",
    goal: "建立品牌官网首页、能力展示页和联系转化路径"
  };
}
function detectSiteType(siteCommand) {
  const normalized = siteCommand.toLowerCase();
  if (["落地页", "单页", "专题", "campaign", "landing"].some((keyword) => normalized.includes(keyword))) {
    return "landing";
  }
  if (["案例", "作品集", "showcase", "portfolio"].some((keyword) => normalized.includes(keyword))) {
    return "showcase";
  }
  if (["产品", "商品", "catalog", "目录"].some((keyword) => normalized.includes(keyword))) {
    return "catalog";
  }
  return "corporate";
}
function inferStyleKeywords(siteCommand, industryKey) {
  const normalized = siteCommand.toLowerCase();
  const keywords = [];
  if (["高端", "奢华", "黑金", "luxury"].some((keyword) => normalized.includes(keyword))) {
    keywords.push("luxury", "dark");
  }
  if (["科技", "未来", "ai", "tech"].some((keyword) => normalized.includes(keyword))) {
    keywords.push("tech", "clean");
  }
  if (["工业", "制造", "硬核"].some((keyword) => normalized.includes(keyword))) {
    keywords.push("industrial", "structured");
  }
  if (["极简", "简约", "minimal"].some((keyword) => normalized.includes(keyword))) {
    keywords.push("minimal");
  }
  if (keywords.length === 0) {
    if (industryKey === "saas") {
      keywords.push("tech", "clean", "conversion");
    } else if (industryKey === "trading") {
      keywords.push("brand", "global", "conversion");
    } else {
      keywords.push("industrial", "premium", "conversion");
    }
  }
  return Array.from(new Set(keywords));
}
function inferThemeTokens(styleKeywords) {
  if (styleKeywords.includes("luxury")) {
    return {
      colorPrimary: "#d4a017",
      colorAccent: "#111827",
      surface: "#020617",
      radius: "20px",
      tone: "luxury"
    };
  }
  if (styleKeywords.includes("tech")) {
    return {
      colorPrimary: "#2563eb",
      colorAccent: "#0f172a",
      surface: "#f8fafc",
      radius: "18px",
      tone: "tech"
    };
  }
  return {
    colorPrimary: "#1d4ed8",
    colorAccent: "#0f172a",
    surface: "#ffffff",
    radius: "16px",
    tone: "brand"
  };
}
function inferCompanyName(siteCommand, fallbackName) {
  const trimmed = compactText(siteCommand);
  const match = trimmed.match(/(?:为|给|帮我做|生成|创建|搭建)([^，。,.]{2,18})(?:官网|网站|站点|独立站|落地页|产品站)/);
  if (match?.[1]) {
    return compactText(match[1]);
  }
  return fallbackName;
}
function resolveSectionType(sectionId) {
  const normalized = sectionId.toLowerCase();
  if (normalized.includes("hero")) return "hero";
  if (normalized.includes("feature")) return "feature-grid";
  if (normalized.includes("product")) return "product-grid";
  if (normalized.includes("solution")) return "solution-list";
  if (normalized.includes("case")) return "case-list";
  if (normalized.includes("faq")) return "faq";
  if (normalized.includes("contact") || normalized.includes("form")) return "contact-form";
  if (normalized.includes("timeline")) return "timeline";
  return "content-block";
}
function createSectionPlan(sectionId, title, description) {
  const type = resolveSectionType(sectionId);
  return {
    sectionId,
    title,
    description,
    type,
    variant: "default",
    props: {
      title,
      description
    },
    bindings: type === "product-grid" ? { items: "product.list" } : type === "case-list" ? { items: "case.list" } : type === "contact-form" ? { submitTarget: "contact.form" } : {}
  };
}
function buildSectionsForPage(pageId, siteName, industryLabel) {
  const pageSectionMap = {
    home: [
      createSectionPlan("hero", `${siteName} 首屏主视觉`, `突出 ${industryLabel} 品牌定位、核心卖点和首要转化按钮`),
      createSectionPlan("features", "核心优势展示", "以三栏能力卡形式展示差异化能力、工艺或平台价值"),
      createSectionPlan("about", "品牌与方案介绍", "说明团队背景、服务能力、技术实力或品牌信任状"),
      createSectionPlan("products", "重点产品或方案", "展示主打产品、解决方案或服务包，支持后续映射真实数据"),
      createSectionPlan("contact", "线索收集与联系入口", "放置询盘表单、联系方式和下一步转化动作")
    ],
    "about-us": [
      createSectionPlan("about-hero", "关于我们首屏", "概述公司历史、品牌愿景和核心定位"),
      createSectionPlan("about-features", "团队能力与资质", "用能力卡和认证信息展示公司方法论与交付实力"),
      createSectionPlan("about-contact", "合作沟通入口", "承接品牌介绍页尾部的联系和合作意向")
    ],
    products: [
      createSectionPlan("products-hero", "产品中心首屏", "突出主产品线、分类方式和核心参数亮点"),
      createSectionPlan("product-list", "产品列表与卡片", "以列表或卡片网格展示产品，便于切换到真实模型字段"),
      createSectionPlan("product-features", "产品优势补充", "说明差异化卖点、交付标准和应用场景"),
      createSectionPlan("product-contact", "产品询盘转化", "承接报价、样品申请和业务联系")
    ],
    solutions: [
      createSectionPlan("solutions-hero", "解决方案首屏", "概述服务行业、典型问题和方法论"),
      createSectionPlan("solutions-features", "方案能力矩阵", "展示解决方案模块、流程和交付边界"),
      createSectionPlan("solutions-list", "典型方案列表", "列出核心方案包、场景化能力或行业服务"),
      createSectionPlan("solutions-contact", "方案咨询入口", "承接预约演示、技术咨询或顾问联系")
    ],
    cases: [
      createSectionPlan("case-hero", "案例成果首屏", "强调项目结果、行业覆盖和客户信任"),
      createSectionPlan("case-list", "案例列表展示", "按项目或行业展示案例卡片，便于后续映射案例模型"),
      createSectionPlan("case-about", "交付方法补充", "解释案例背后的流程、团队协同和项目方法"),
      createSectionPlan("case-contact", "合作沟通入口", "让用户从案例页继续留下需求")
    ],
    contact: [
      createSectionPlan("contact-hero", "联系我们首屏", "强调快速响应、顾问支持和合作方式"),
      createSectionPlan("contact-form", "需求表单与联系信息", "集中承接电话、邮箱、表单和商务咨询"),
      createSectionPlan("contact-faq", "常见问题与补充说明", "减少沟通成本，提前说明交付周期和合作方式")
    ]
  };
  return pageSectionMap[pageId] || pageSectionMap.home;
}
function buildDynamicSitePlan(projectId, siteCommand, schemaAnalysis) {
  const industry = detectIndustry(siteCommand);
  const siteType = detectSiteType(siteCommand);
  const styleKeywords = inferStyleKeywords(siteCommand, industry.key);
  const themeTokens = inferThemeTokens(styleKeywords);
  const siteName = inferCompanyName(siteCommand, industry.companyName);
  const normalizedSchemaAnalysis = schemaAnalysis || buildSchemaAnalysis({}, "db_fallback");
  const pageBlueprints = siteType === "landing" ? [
    { pageId: "home", pageName: "首页", routePath: "/" },
    { pageId: "contact", pageName: "联系我们", routePath: "/contact" }
  ] : siteType === "showcase" ? [
    { pageId: "home", pageName: "首页", routePath: "/" },
    { pageId: "cases", pageName: "案例展示", routePath: "/cases" },
    { pageId: "about-us", pageName: "关于我们", routePath: "/about-us" },
    { pageId: "contact", pageName: "联系我们", routePath: "/contact" }
  ] : siteType === "catalog" ? [
    { pageId: "home", pageName: "首页", routePath: "/" },
    { pageId: "products", pageName: "产品中心", routePath: "/products" },
    { pageId: "solutions", pageName: "解决方案", routePath: "/solutions" },
    { pageId: "contact", pageName: "联系我们", routePath: "/contact" }
  ] : [
    { pageId: "home", pageName: "首页", routePath: "/" },
    { pageId: "about-us", pageName: "关于我们", routePath: "/about-us" },
    { pageId: "products", pageName: "产品中心", routePath: "/products" },
    { pageId: "contact", pageName: "联系我们", routePath: "/contact" }
  ];
  const pages = pageBlueprints.map((page) => ({
    ...page,
    sections: buildSectionsForPage(page.pageId, siteName, industry.label)
  }));
  const createdAt = (/* @__PURE__ */ new Date()).toISOString();
  const bindingHints = buildBindingHints(normalizedSchemaAnalysis);
  const dataBinding = {
    mode: "mock",
    fieldMappings: buildFieldMappings(normalizedSchemaAnalysis),
    schemaSource: normalizedSchemaAnalysis.source,
    updatedAt: createdAt
  };
  return {
    projectId,
    version: 1,
    siteMeta: {
      siteName,
      industry: industry.label,
      siteType,
      styleKeywords,
      sourceCommand: compactText(siteCommand)
    },
    siteBrief: {
      summary: `${siteName} 的 ${industry.label}${siteType === "landing" ? "落地页" : "官网"}，重点围绕 ${industry.goal}。`,
      targetAudience: industry.audience,
      primaryGoal: industry.goal
    },
    themeTokens,
    bindingHints,
    schemaAnalysis: normalizedSchemaAnalysis,
    dataBinding,
    changeLog: [
      {
        version: 1,
        instruction: compactText(siteCommand),
        summary: "初始化站点 DSL",
        createdAt,
        patches: [
          {
            op: "add",
            targetType: "page",
            targetId: "site",
            summary: "根据用户描述创建首版站点结构"
          }
        ]
      }
    ],
    dsl: {
      version: 1,
      siteMeta: {
        siteName,
        industry: industry.label,
        siteType,
        styleKeywords,
        sourceCommand: compactText(siteCommand)
      },
      themeTokens,
      pages
    },
    pages
  };
}
function normalizeSitePlan(input) {
  if (input?.dsl?.pages && Array.isArray(input.dsl.pages)) {
    return input;
  }
  const fallback = buildDynamicSitePlan(
    String(input?.projectId || crypto.randomUUID()),
    String(input?.siteMeta?.sourceCommand || input?.sourceCommand || "低代码快速建站"),
    input?.schemaAnalysis
  );
  return {
    ...fallback,
    ...input,
    version: Number(input?.version || 1),
    schemaAnalysis: input?.schemaAnalysis || fallback.schemaAnalysis,
    dataBinding: input?.dataBinding || fallback.dataBinding,
    changeLog: Array.isArray(input?.changeLog) ? input.changeLog : fallback.changeLog,
    dsl: {
      ...fallback.dsl,
      ...input?.dsl || {},
      pages: Array.isArray(input?.pages) ? input.pages : fallback.dsl.pages
    },
    pages: Array.isArray(input?.pages) ? input.pages : fallback.pages
  };
}
function ensurePage(plan, pageId, pageName, routePath) {
  if (plan.pages.some((page) => page.pageId === pageId)) return;
  plan.pages.push({
    pageId,
    pageName,
    routePath,
    sections: buildSectionsForPage(pageId, plan.siteMeta.siteName, plan.siteMeta.industry)
  });
}
function removePage(plan, pageId) {
  plan.pages = plan.pages.filter((page) => page.pageId !== pageId);
}
function appendSectionToHome(plan, section) {
  const home = plan.pages.find((page) => page.pageId === "home");
  if (!home) return;
  if (home.sections.some((item) => item.sectionId === section.sectionId)) return;
  home.sections.push(section);
}
function removeSectionFromHome(plan, sectionId) {
  const home = plan.pages.find((page) => page.pageId === "home");
  if (!home) return;
  home.sections = home.sections.filter((item) => item.sectionId !== sectionId);
}
function refineSitePlan(currentPlan, instruction) {
  const plan = cloneJson(currentPlan);
  const normalized = instruction.toLowerCase();
  const changes = [];
  const patches = [];
  if (["黑金", "奢华", "高端"].some((keyword) => normalized.includes(keyword))) {
    plan.siteMeta.styleKeywords = Array.from(/* @__PURE__ */ new Set(["luxury", "dark", ...plan.siteMeta.styleKeywords]));
    plan.themeTokens = inferThemeTokens(plan.siteMeta.styleKeywords);
    changes.push("已切换为偏高端黑金风格");
    patches.push({
      op: "update",
      targetType: "theme",
      targetId: "themeTokens",
      summary: "主题调整为高端黑金风格"
    });
  } else if (["科技", "未来", "ai", "蓝色"].some((keyword) => normalized.includes(keyword))) {
    plan.siteMeta.styleKeywords = Array.from(/* @__PURE__ */ new Set(["tech", "clean", ...plan.siteMeta.styleKeywords]));
    plan.themeTokens = inferThemeTokens(plan.siteMeta.styleKeywords);
    changes.push("已强化科技风格与蓝色主题");
    patches.push({
      op: "update",
      targetType: "theme",
      targetId: "themeTokens",
      summary: "主题调整为科技蓝风格"
    });
  } else if (["极简", "简约"].some((keyword) => normalized.includes(keyword))) {
    plan.siteMeta.styleKeywords = Array.from(/* @__PURE__ */ new Set(["minimal", ...plan.siteMeta.styleKeywords.filter((item) => item !== "luxury")]));
    plan.themeTokens = inferThemeTokens(plan.siteMeta.styleKeywords);
    changes.push("已调整为更简约的页面风格");
    patches.push({
      op: "update",
      targetType: "theme",
      targetId: "themeTokens",
      summary: "主题调整为简约风格"
    });
  }
  if (normalized.includes("案例")) {
    if (normalized.includes("删除") || normalized.includes("去掉")) {
      removePage(plan, "cases");
      removeSectionFromHome(plan, "case-list");
      changes.push("已移除案例页面与首页案例模块");
      patches.push({
        op: "remove",
        targetType: "page",
        targetId: "cases",
        summary: "删除案例展示页面"
      });
      patches.push({
        op: "remove",
        targetType: "section",
        targetId: "home/case-list",
        summary: "删除首页案例模块"
      });
    } else {
      ensurePage(plan, "cases", "案例展示", "/cases");
      appendSectionToHome(plan, createSectionPlan("case-list", "客户案例展示", "补充客户案例、项目成果和交付证明"));
      changes.push("已补充案例展示页面");
      patches.push({
        op: "add",
        targetType: "page",
        targetId: "cases",
        summary: "新增案例展示页面"
      });
      patches.push({
        op: "add",
        targetType: "section",
        targetId: "home/case-list",
        summary: "在首页增加案例模块"
      });
    }
  }
  if (normalized.includes("解决方案")) {
    if (normalized.includes("删除") || normalized.includes("去掉")) {
      removePage(plan, "solutions");
      changes.push("已移除解决方案页面");
      patches.push({
        op: "remove",
        targetType: "page",
        targetId: "solutions",
        summary: "删除解决方案页面"
      });
    } else {
      ensurePage(plan, "solutions", "解决方案", "/solutions");
      changes.push("已补充解决方案页面");
      patches.push({
        op: "add",
        targetType: "page",
        targetId: "solutions",
        summary: "新增解决方案页面"
      });
    }
  }
  if (normalized.includes("关于我们") && (normalized.includes("删除") || normalized.includes("去掉"))) {
    removePage(plan, "about-us");
    changes.push("已移除关于我们页面");
    patches.push({
      op: "remove",
      targetType: "page",
      targetId: "about-us",
      summary: "删除关于我们页面"
    });
  }
  if (normalized.includes("faq") || normalized.includes("常见问题")) {
    if (normalized.includes("删除") || normalized.includes("去掉")) {
      removeSectionFromHome(plan, "faq");
      changes.push("已移除首页 FAQ 模块");
      patches.push({
        op: "remove",
        targetType: "section",
        targetId: "home/faq",
        summary: "删除首页 FAQ 模块"
      });
    } else {
      appendSectionToHome(plan, createSectionPlan("faq", "常见问题", "补充用户常见问题、交付说明和购买顾虑解答"));
      changes.push("已增加首页 FAQ 模块");
      patches.push({
        op: "add",
        targetType: "section",
        targetId: "home/faq",
        summary: "新增首页 FAQ 模块"
      });
    }
  }
  if (normalized.includes("时间线") || normalized.includes("历程")) {
    appendSectionToHome(plan, createSectionPlan("timeline", "发展历程", "用时间线展示品牌发展、关键里程碑和成长节点"));
    changes.push("已增加首页发展历程模块");
    patches.push({
      op: "add",
      targetType: "section",
      targetId: "home/timeline",
      summary: "新增首页发展历程模块"
    });
  }
  if (normalized.includes("联系") && (normalized.includes("强化") || normalized.includes("突出") || normalized.includes("增加"))) {
    appendSectionToHome(plan, createSectionPlan("contact-form", "立即咨询", "强化询盘转化入口、预约演示和线索收集表单"));
    changes.push("已强化首页联系转化模块");
    patches.push({
      op: "add",
      targetType: "section",
      targetId: "home/contact-form",
      summary: "强化首页联系转化模块"
    });
  }
  plan.version = Number(plan.version || 1) + 1;
  plan.dsl = {
    version: plan.version,
    siteMeta: { ...plan.siteMeta },
    themeTokens: { ...plan.themeTokens },
    pages: plan.pages
  };
  if (changes.length === 0) {
    changes.push("未识别到明确结构变更，已保留当前站点规划");
    patches.push({
      op: "update",
      targetType: "section",
      targetId: "noop",
      summary: "保留当前结构，仅记录微调指令"
    });
  }
  const summary = changes.join("；");
  plan.changeLog = Array.isArray(plan.changeLog) ? plan.changeLog : [];
  plan.changeLog.unshift({
    version: plan.version,
    instruction: compactText(instruction),
    summary,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    patches
  });
  plan.changeLog = plan.changeLog.slice(0, 12);
  return {
    sitePlan: plan,
    summary,
    patches
  };
}
const adminApp = new Hono();
adminApp.use("*", cors());
async function fetchSchema(c, db) {
  try {
    const schemaUrl = new URL("/api/v1/p/schema/all", c.req.url).toString();
    const resp = await fetch(schemaUrl);
    if (!resp.ok) throw new Error("Schema fetch returned non-200");
    const payload = await resp.json().catch(() => ({}));
    const schemaMap = payload?.success && Array.isArray(payload?.models) ? payload.models.reduce((acc, item) => {
      const modelSlug = String(item?.modelSlug || item?.slug || "").trim();
      if (modelSlug) {
        acc[modelSlug] = Array.isArray(item?.fields) ? item.fields : [];
      }
      return acc;
    }, {}) : {};
    if (Object.keys(schemaMap).length > 0) {
      return { source: "schema_all", schemaMap };
    }
    throw new Error("Schema fetch returned empty data");
  } catch (e) {
    const schemaMap = {};
    try {
      const result = await db.prepare("SELECT slug, fields_json FROM models ORDER BY id ASC").all();
      const rows = Array.isArray(result?.results) ? result.results : [];
      for (const row of rows) {
        const slug = String(row?.slug || "").trim();
        if (!slug) continue;
        try {
          schemaMap[slug] = row?.fields_json ? JSON.parse(String(row.fields_json)) : [];
        } catch {
          schemaMap[slug] = [];
        }
      }
    } catch {
      schemaMap.category = [];
    }
    return {
      source: "db_fallback",
      schemaMap
    };
  }
}
async function ensureTables(db) {
  if (!db) return;
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS le_system_deploy_projects (
      id TEXT PRIMARY KEY,
      site_slug TEXT NOT NULL,
      r2_file_key TEXT,
      memo TEXT,
      created_at TEXT NOT NULL
    )
  `).run();
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS le_system_deploy_drafts (
      id TEXT PRIMARY KEY,
      site_slug TEXT NOT NULL,
      r2_file_key TEXT,
      memo TEXT,
      created_at TEXT NOT NULL
    )
  `).run();
  await db.prepare(`
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
  `).run();
}
adminApp.get("/init", async (c) => {
  const db = c.env.DB;
  await ensureTables(db);
  return c.json({ code: "OK", message: "Lowcode tables ensured successfully (Self-healed)" });
});
adminApp.post("/project/init", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const { siteCommand } = await c.req.json();
    const schemaPayload = await fetchSchema(c, db);
    const schemaAnalysis = buildSchemaAnalysis(schemaPayload.schemaMap, schemaPayload.source);
    const missingModels = [];
    if (!schemaAnalysis.matched.product) {
      missingModels.push("商品/产品管理模型 (可自定义标识为 goods, product, item 等)");
    }
    if (!schemaAnalysis.matched.category) {
      missingModels.push("品类/分类管理模型 (可自定义标识为 category, classify, type 等)");
    }
    if (missingModels.length > 0) {
      return c.json({
        code: "SCHEMA_INCOMPLETE",
        missingModels,
        schemaAnalysis
      }, 400);
    }
    const projectId = crypto.randomUUID();
    const sitePlan = buildDynamicSitePlan(projectId, siteCommand || "低代码快速建站", schemaAnalysis);
    await db.prepare(`
      INSERT INTO le_system_deploy_projects (id, site_slug, memo, created_at)
      VALUES (?, ?, ?, ?)
    `).bind(projectId, siteCommand, "Initial project design", (/* @__PURE__ */ new Date()).toISOString()).run();
    return c.json({ code: "OK", sitePlan, schemaAnalysis });
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message }, 500);
  }
});
adminApp.post("/project/refine", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const instruction = compactText(body?.instruction || "");
    if (!instruction) {
      return c.json({ code: "BAD_REQUEST", error: "缺少 instruction" }, 400);
    }
    const currentPlan = normalizeSitePlan(body?.sitePlan || {});
    const refined = refineSitePlan(currentPlan, instruction);
    return c.json({
      code: "OK",
      sitePlan: refined.sitePlan,
      summary: refined.summary
    });
  } catch (e) {
    return c.json({ code: "REFINE_FAILED", error: e.message || "DSL 微调失败" }, 500);
  }
});
adminApp.post("/project/real-samples", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const body = await c.req.json().catch(() => ({}));
    const sitePlan = normalizeSitePlan(body?.sitePlan || {});
    const sampleRecords = await buildSampleRecords(db, sitePlan.dataBinding, 3);
    const nextSitePlan = {
      ...sitePlan,
      dataBinding: {
        ...sitePlan.dataBinding,
        sampleRecords,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    return c.json({
      code: "OK",
      sitePlan: nextSitePlan,
      sampleRecords
    });
  } catch (e) {
    return c.json({ code: "REAL_SAMPLE_FAILED", error: e.message || "真实记录采样失败" }, 500);
  }
});
adminApp.post("/project/build-sections", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const body = await c.req.json().catch(() => ({}));
    const projectId = String(body?.projectId || "").trim();
    const pagePlan = body?.pagePlan || { pages: [] };
    const sitePlan = body?.sitePlan ? normalizeSitePlan(body.sitePlan) : null;
    const proj = await db.prepare(`SELECT * FROM le_system_deploy_projects WHERE id = ?`).bind(projectId).first();
    if (!proj) {
      return c.json({ code: "PROJECT_NOT_FOUND" }, 404);
    }
    const htmlStore = {};
    const pageStore = {};
    const bucket = c.env.MEDIA_BUCKET;
    const siteCommand = proj.site_slug || "";
    const bindingMeta = describeDataBinding(sitePlan?.dataBinding);
    for (const page of pagePlan.pages) {
      const sectionDocuments = [];
      for (const sec of page.sections) {
        const key = `${page.pageId}-${sec.sectionId}`;
        const finalHtml = buildHtmlSection(
          page.pageId,
          sec.sectionId,
          sec.title,
          sec.description || "",
          siteCommand,
          {
            dataMode: bindingMeta.mode,
            bindingLabel: bindingMeta.bindingLabel,
            sampleRecords: Array.isArray(sitePlan?.dataBinding?.sampleRecords) ? sitePlan.dataBinding.sampleRecords : []
          }
        );
        sectionDocuments.push(finalHtml);
        const objectKey = `projects/${projectId}/${key}.html`;
        await bucket.put(objectKey, finalHtml, { httpMetadata: { contentType: "text/html" } });
        const previewUrl = `/api/v1/plugins/proxy/lowcode-deployer/preview/${objectKey}`;
        htmlStore[key] = {
          previewUrl,
          summary: `${sec.description || "积木区块准备就绪"} · ${bindingMeta.modeLabel}`
        };
      }
      const pageObjectKey = `projects/${projectId}/pages/${page.pageId}.html`;
      const pageHtml = buildPagePreviewHtml(page.pageName || page.pageId, sectionDocuments);
      await bucket.put(pageObjectKey, pageHtml, { httpMetadata: { contentType: "text/html" } });
      pageStore[page.pageId] = {
        pageName: page.pageName || page.pageId,
        previewUrl: `/api/v1/plugins/proxy/lowcode-deployer/preview/${pageObjectKey}`,
        summary: `${Array.isArray(page.sections) ? page.sections.length : 0} 个模块已组合为整页预览 · ${bindingMeta.modeLabel}`
      };
    }
    await db.prepare(`UPDATE le_system_deploy_projects SET r2_file_key = ? WHERE id = ?`).bind(`projects/${projectId}/`, projectId).run();
    return c.json({ code: "OK", htmlStore, pageStore });
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message }, 500);
  }
});
adminApp.post("/section/refine", async (c) => {
  try {
    const { projectId, pageId, sectionId, instruction } = await c.req.json();
    const bucket = c.env.MEDIA_BUCKET;
    const objectKey = `projects/${projectId}/${pageId}-${sectionId}.html`;
    const getObj = await bucket.get(objectKey);
    if (!getObj) {
      return c.json({ code: "HTML_NOT_FOUND", error: "区块源码尚未生成，请先执行批量构建" }, 404);
    }
    const oldHtml = await getObj.text();
    const newHtml = refineHtmlSection(oldHtml, instruction);
    await bucket.put(objectKey, newHtml, { httpMetadata: { contentType: "text/html" } });
    const previewUrl = `/api/v1/plugins/proxy/lowcode-deployer/preview/${objectKey}?t=${Date.now()}`;
    return c.json({
      code: "OK",
      previewUrl,
      message: "Section refined successfully (RegEx injected)"
    });
  } catch (e) {
    return c.json({ code: "REFINE_FAILED", error: e.message }, 500);
  }
});
adminApp.post("/drafts/save", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const { draftId, sitePlan, htmlStore, metadata } = await c.req.json();
    const id = draftId || crypto.randomUUID();
    const bucket = c.env.MEDIA_BUCKET;
    const objectKey = `drafts/${id}.json`;
    const payload = JSON.stringify({ sitePlan, htmlStore, metadata });
    await bucket.put(objectKey, payload, { httpMetadata: { contentType: "application/json" } });
    await db.prepare(`
      INSERT OR REPLACE INTO le_system_deploy_drafts (id, site_slug, r2_file_key, memo, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      id,
      metadata?.siteSlug || "lowcode-site",
      objectKey,
      metadata?.memo || "云端视觉资产草稿",
      metadata?.createdAt || (/* @__PURE__ */ new Date()).toISOString()
    ).run();
    return c.json({
      code: "CREATED",
      draftId: id,
      message: "Draft saved successfully into R2时光机"
    }, 201);
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message }, 500);
  }
});
adminApp.get("/drafts/load/:draftId", async (c) => {
  try {
    const { draftId } = c.req.param();
    const bucket = c.env.MEDIA_BUCKET;
    const objectKey = `drafts/${draftId}.json`;
    const obj = await bucket.get(objectKey);
    if (!obj) {
      return c.json({ code: "DRAFT_NOT_FOUND", error: "草稿文件在云端不存在" }, 404);
    }
    const data = await obj.json();
    return c.json({ code: "OK", draft: data });
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message }, 500);
  }
});
adminApp.get("/drafts/list", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const list = await db.prepare(`
      SELECT id, site_slug, r2_file_key, memo, created_at
      FROM le_system_deploy_drafts
      ORDER BY created_at DESC
    `).all();
    return c.json({
      code: "OK",
      drafts: list.results || []
    });
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message }, 500);
  }
});
adminApp.get("/deployments/:projectId", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const projectId = String(c.req.param("projectId") || "").trim();
    if (!projectId) {
      return c.json({ code: "BAD_REQUEST", error: "缺少 projectId" }, 400);
    }
    const result = await db.prepare(`
      SELECT id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at
      FROM le_system_deploy_deployments
      WHERE project_id = ?
      ORDER BY created_at DESC
      LIMIT 10
    `).bind(projectId).all();
    const deployments = Array.isArray(result?.results) ? result.results.map((row) => {
      let responseJson = null;
      try {
        responseJson = row?.response_json ? JSON.parse(String(row.response_json)) : null;
      } catch {
        responseJson = null;
      }
      return {
        id: row?.id || "",
        projectId: row?.project_id || "",
        projectName: row?.pages_project_name || "",
        branch: row?.branch || "main",
        status: row?.status || "unknown",
        deploymentUrl: row?.deployment_url || "",
        bundleObjectKey: row?.bundle_object_key || "",
        customDomain: row?.custom_domain || "",
        message: row?.message || "",
        response: responseJson,
        createdAt: row?.created_at || ""
      };
    }) : [];
    return c.json({ code: "OK", deployments });
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message || "部署历史读取失败" }, 500);
  }
});
adminApp.get("/deployment-record/:deploymentId", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const deploymentId = String(c.req.param("deploymentId") || "").trim();
    if (!deploymentId) {
      return c.json({ code: "BAD_REQUEST", error: "缺少 deploymentId" }, 400);
    }
    const row = await db.prepare(`
      SELECT id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at
      FROM le_system_deploy_deployments
      WHERE id = ?
      LIMIT 1
    `).bind(deploymentId).first();
    if (!row) {
      return c.json({ code: "NOT_FOUND", error: "部署记录不存在" }, 404);
    }
    let responseJson = null;
    try {
      responseJson = row?.response_json ? JSON.parse(String(row.response_json)) : null;
    } catch {
      responseJson = null;
    }
    return c.json({
      code: "OK",
      deployment: {
        id: row?.id || "",
        projectId: row?.project_id || "",
        projectName: row?.pages_project_name || "",
        branch: row?.branch || "main",
        status: row?.status || "unknown",
        deploymentUrl: row?.deployment_url || "",
        bundleObjectKey: row?.bundle_object_key || "",
        customDomain: row?.custom_domain || "",
        message: row?.message || "",
        response: responseJson,
        createdAt: row?.created_at || ""
      }
    });
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message || "部署详情读取失败" }, 500);
  }
});
adminApp.post("/project/export-astro-plan", async (c) => {
  try {
    const { projectId, sitePlan, htmlStore } = await c.req.json();
    if (!projectId || !sitePlan || typeof sitePlan !== "object") {
      return c.json({ code: "BAD_REQUEST", error: "缺少 projectId 或 sitePlan" }, 400);
    }
    const normalizedPlan = normalizeSitePlan(sitePlan);
    const pages = Array.isArray(normalizedPlan?.pages) ? normalizedPlan.pages : [];
    const fieldMappings = Array.isArray(normalizedPlan?.dataBinding?.fieldMappings) ? normalizedPlan.dataBinding.fieldMappings : [];
    const sampleRecords = Array.isArray(normalizedPlan?.dataBinding?.sampleRecords) ? normalizedPlan.dataBinding.sampleRecords : [];
    const astroPages = pages.map((page) => {
      const routePath = page.pageId === "home" ? "/" : `/${String(page.pageId || "").replace(/^\/+/, "")}`;
      const sections = Array.isArray(page?.sections) ? page.sections.map((section) => {
        const key = `${page.pageId}-${section.sectionId}`;
        const sectionType = String(section?.type || section?.variant || section?.sectionId || "section");
        const matchingBinding = fieldMappings.find(
          (mapping) => /product|goods|item|commodity|prod/i.test(String(mapping?.sourceModel || "")) ? /product|list|catalog/i.test(sectionType) : /category|classify|catalog|type/i.test(String(mapping?.sourceModel || "")) && /category|nav|filter/i.test(sectionType)
        ) || null;
        return {
          sectionId: section.sectionId,
          title: section.title,
          description: section.description || "",
          type: section.type || "generic",
          variant: section.variant || "",
          props: section.props || {},
          bindings: section.bindings || {},
          previewUrl: htmlStore?.[key]?.previewUrl || "",
          summary: htmlStore?.[key]?.summary || section.description || "",
          astroComponent: sectionType.includes("hero") ? "HeroSection" : sectionType.includes("product") || sectionType.includes("list") ? "ProductGridSection" : sectionType.includes("about") ? "AboutSection" : sectionType.includes("feature") ? "FeatureSection" : sectionType.includes("contact") || sectionType.includes("form") ? "ContactSection" : "PreviewSection",
          dataSource: matchingBinding ? {
            sourceModel: matchingBinding.sourceModel,
            fields: matchingBinding.fields,
            status: matchingBinding.status
          } : null
        };
      }) : [];
      return {
        pageId: page.pageId,
        pageName: page.pageName,
        routePath,
        seo: {
          title: `${page.pageName || page.pageId} | ${normalizedPlan?.siteMeta?.siteName || "Astro Site"}`,
          description: normalizedPlan?.siteBrief?.summary || ""
        },
        sections
      };
    });
    const handoffPayload = {
      version: 1,
      projectId,
      generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      siteMeta: normalizedPlan.siteMeta,
      siteBrief: normalizedPlan.siteBrief,
      themeTokens: normalizedPlan.themeTokens,
      dsl: normalizedPlan.dsl,
      dataBinding: normalizedPlan.dataBinding,
      schemaAnalysis: normalizedPlan.schemaAnalysis,
      pages: astroPages,
      delivery: {
        preferredRenderer: "astro_template_adapter",
        templateRoot: "src/plugins/lowcode-deployer/astro-template",
        mockMode: normalizedPlan?.dataBinding?.mode !== "real",
        nextAction: "将 handoff.pages 与 dsl.pages 渲染到 Astro 模板页面，并接入 dataBinding 适配层"
      }
    };
    const renderPlan = {
      projectId,
      templateRoot: "src/plugins/lowcode-deployer/astro-template",
      templateFiles: ASTRO_TEMPLATE_FILES,
      generatedAt: handoffPayload.generatedAt,
      entryPage: astroPages[0]?.routePath || "/",
      pages: astroPages,
      handoff: handoffPayload,
      handoffSummary: {
        siteName: normalizedPlan?.siteMeta?.siteName || "",
        pageCount: astroPages.length,
        dataMode: normalizedPlan?.dataBinding?.mode || "mock",
        mappedModelCount: fieldMappings.length,
        sampleModelCount: sampleRecords.filter((group) => Array.isArray(group?.items) && group.items.length > 0).length,
        sampleRecordCount: sampleRecords.reduce((sum, group) => sum + Number(group?.items?.length || 0), 0)
      },
      adapters: {
        layout: "BaseLayout.astro",
        fallbackSectionComponent: "PreviewSection.astro",
        recommendedDataModule: "src/lib/lowcode-site.ts"
      }
    };
    return c.json({
      code: "OK",
      astroPlan: renderPlan
    });
  } catch (e) {
    return c.json({ code: "INTERNAL_ERROR", error: e.message }, 500);
  }
});
adminApp.post("/project/export-astro-files", async (c) => {
  try {
    const bucket = c.env.MEDIA_BUCKET;
    const body = await c.req.json().catch(() => ({}));
    const projectId = String(body?.projectId || "").trim();
    const sitePlan = body?.sitePlan;
    const astroPlanInput = body?.astroPlan;
    if (!projectId || !sitePlan || typeof sitePlan !== "object") {
      return c.json({ code: "BAD_REQUEST", error: "缺少 projectId 或 sitePlan" }, 400);
    }
    let astroPlan = astroPlanInput;
    if (!astroPlan || typeof astroPlan !== "object") {
      const normalizedPlan = normalizeSitePlan(sitePlan);
      const pages = Array.isArray(normalizedPlan?.pages) ? normalizedPlan.pages : [];
      astroPlan = {
        projectId,
        generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        pages: pages.map((page) => ({
          pageId: page.pageId,
          pageName: page.pageName,
          routePath: page.routePath,
          seo: {
            title: `${page.pageName || page.pageId} | ${normalizedPlan?.siteMeta?.siteName || "Astro Site"}`,
            description: normalizedPlan?.siteBrief?.summary || ""
          },
          sections: Array.isArray(page?.sections) ? page.sections.map((section) => ({
            sectionId: section.sectionId,
            title: section.title,
            description: section.description || "",
            summary: section.description || "",
            previewUrl: "",
            astroComponent: "PreviewSection"
          })) : []
        })),
        handoff: {
          projectId,
          siteMeta: normalizedPlan.siteMeta,
          siteBrief: normalizedPlan.siteBrief,
          themeTokens: normalizedPlan.themeTokens,
          dsl: normalizedPlan.dsl,
          dataBinding: normalizedPlan.dataBinding,
          schemaAnalysis: normalizedPlan.schemaAnalysis,
          pages
        }
      };
    }
    const files = buildAstroExportFiles(projectId, astroPlan);
    const exportId = crypto.randomUUID();
    const objectKey = `exports/${projectId}/astro/${exportId}.json`;
    const exportPayload = {
      exportId,
      projectId,
      generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      fileCount: files.length,
      files
    };
    await bucket.put(objectKey, JSON.stringify(exportPayload, null, 2), {
      httpMetadata: { contentType: "application/json" }
    });
    return c.json({
      code: "OK",
      exportId,
      objectKey,
      files,
      summary: {
        fileCount: files.length,
        pageCount: Array.isArray(astroPlan?.pages) ? astroPlan.pages.length : 0
      }
    });
  } catch (e) {
    return c.json({ code: "EXPORT_FAILED", error: e.message || "Astro 工程文件导出失败" }, 500);
  }
});
adminApp.post("/project/lock-and-deploy", async (c) => {
  try {
    const db = c.env.DB;
    await ensureTables(db);
    const bucket = c.env.MEDIA_BUCKET;
    const body = await c.req.json().catch(() => ({}));
    const projectId = String(body?.projectId || "").trim();
    if (!projectId) {
      return c.json({ code: "BAD_REQUEST", error: "缺少 projectId" }, 400);
    }
    const sitePlan = normalizeSitePlan(body?.sitePlan || {});
    const astroPlan = body?.astroPlan || {};
    const deployConfig = body?.deployConfig && typeof body.deployConfig === "object" ? body.deployConfig : {};
    const branch = String(deployConfig?.branch || "main").trim() || "main";
    const customDomain = String(deployConfig?.customDomain || "").trim();
    const projectName = normalizePagesProjectName(
      deployConfig?.projectName || sitePlan?.siteMeta?.siteName || projectId
    );
    const files = await buildDeployFiles(bucket, projectId, sitePlan, astroPlan);
    const deployId = crypto.randomUUID();
    const bundleObjectKey = `deployments/${projectId}/${deployId}/bundle.json`;
    const packageManifest = {
      deployId,
      projectId,
      projectName,
      branch,
      generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      fileCount: files.length,
      files: files.map((file) => ({
        path: file.path,
        size: file.content.length,
        contentType: detectContentType(file.path)
      })),
      handoffSummary: astroPlan?.handoffSummary || null
    };
    await bucket.put(bundleObjectKey, JSON.stringify(packageManifest, null, 2), {
      httpMetadata: { contentType: "application/json" }
    });
    const packageInfo = {
      deployId,
      projectName,
      branch,
      fileCount: files.length,
      bundleObjectKey,
      pagesDomain: `https://${projectName}.pages.dev`,
      customDomain
    };
    const accountId = String(c.env.CF_ACCOUNT_ID || "").trim();
    const apiToken = String(c.env.CF_API_TOKEN || "").trim();
    if (!accountId || !apiToken) {
      await db.prepare(`
        INSERT INTO le_system_deploy_deployments (id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        deployId,
        projectId,
        projectName,
        branch,
        "package_ready",
        packageInfo.pagesDomain,
        bundleObjectKey,
        customDomain,
        "发布包已生成，但当前环境未配置 Cloudflare 凭证。",
        JSON.stringify({ packageInfo }),
        (/* @__PURE__ */ new Date()).toISOString()
      ).run();
      return c.json({
        code: "PACKAGE_READY",
        message: "发布包已生成，但当前环境未配置 CF_ACCOUNT_ID / CF_API_TOKEN，暂未执行 Pages 直传部署。",
        packageInfo
      });
    }
    try {
      await ensurePagesProject(accountId, apiToken, projectName, branch);
      const deploymentResult = await uploadPagesDeployment(accountId, apiToken, projectName, branch, files);
      await db.prepare(`
        INSERT INTO le_system_deploy_deployments (id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        deployId,
        projectId,
        projectName,
        branch,
        "deployed",
        deploymentResult?.url || packageInfo.pagesDomain,
        bundleObjectKey,
        customDomain,
        "项目已发布到 Cloudflare Pages。",
        JSON.stringify({ packageInfo, deployment: deploymentResult }),
        (/* @__PURE__ */ new Date()).toISOString()
      ).run();
      return c.json({
        code: "DEPLOYED",
        message: "项目已发布到 Cloudflare Pages。",
        deploymentUrl: deploymentResult?.url || packageInfo.pagesDomain,
        packageInfo,
        deployment: deploymentResult
      });
    } catch (deployError) {
      await db.prepare(`
        INSERT INTO le_system_deploy_deployments (id, project_id, pages_project_name, branch, status, deployment_url, bundle_object_key, custom_domain, message, response_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        deployId,
        projectId,
        projectName,
        branch,
        "failed",
        packageInfo.pagesDomain,
        bundleObjectKey,
        customDomain,
        deployError?.message || "Pages 直传部署失败",
        JSON.stringify({ packageInfo, error: deployError?.message || "Pages 直传部署失败" }),
        (/* @__PURE__ */ new Date()).toISOString()
      ).run();
      return c.json({
        code: "PACKAGE_READY",
        message: "发布包已生成，但 Pages 直传部署失败。可继续使用发布包手动发布。",
        error: deployError?.message || "Pages 直传部署失败",
        packageInfo
      });
    }
  } catch (e) {
    return c.json({ code: "DEPLOY_FAILED", error: e.message || "发布失败" }, 500);
  }
});
adminApp.get("/preview/*", async (c) => {
  try {
    const bucket = c.env.MEDIA_BUCKET;
    const url = new URL(c.req.url);
    const key = url.pathname.replace("/api/v1/plugins/proxy/lowcode-deployer/preview/", "");
    const obj = await bucket.get(key);
    if (!obj) {
      return c.html(`
        <div style="font-family:sans-serif;padding:40px;text-align:center;color:#64748b;">
          <h2>⚠️ 预览文件未就绪 (404)</h2>
          <p>文件 ${key} 尚未在 R2 存储桶中上传。请先在工作台中点击构建区块按钮。</p>
        </div>
      `, 404);
    }
    const htmlContent = await obj.text();
    return c.html(htmlContent);
  } catch (e) {
    return c.text("Preview proxy error: " + e.message, 500);
  }
});
const index = {
  admin: adminApp,
  storefront: void 0,
  // 本插件不提供前台 storefront，只提供超级管理员低代码工作台
  // 主系统加载插件时的初始化钩子，用于原生 SQL 表的自愈创建，保持高度解耦与安全性
  init: async (db) => {
    try {
      await ensureTables(db);
    } catch (e) {
    }
  }
};
export {
  index as default
};
