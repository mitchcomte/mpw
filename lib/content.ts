export type ArticleSection = { heading: string; paragraphs?: string[]; bullets?: string[] };
export type InspirationArticle = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  readTime: string;
  sections: ArticleSection[];
  checklist?: string[];
  faq?: { question: string; answer: string }[];
};

export const inspirationArticles: InspirationArticle[] = [
  {
    slug:"how-much-does-a-wedding-cost-in-portland",
    category:"Budget",
    title:"How Much Does a Wedding Cost in Portland? A Practical 2026 Budget Guide",
    dek:"A realistic way to build a Portland wedding budget around your guest count, priorities and vendor team—without treating one average number like a rule.",
    readTime:"9 min read",
    sections:[
      {heading:"There is no single Portland wedding price", paragraphs:["Wedding costs in Portland can vary dramatically because couples are not buying the same wedding. Guest count, venue format, catering style, date, rentals and the vendors you prioritize can change the total by tens of thousands of dollars.","Instead of asking what a Portland wedding is supposed to cost, start with the amount you can comfortably spend and build the celebration around that number."]},
      {heading:"Guest count changes more than the catering bill", paragraphs:["Adding guests can increase food and beverage costs, but it can also affect the venue you need, rentals, tables, linens, stationery, transportation and staffing. That is why guest count is one of the first numbers to settle when building a useful budget."]},
      {heading:"Build the budget around your priorities", paragraphs:["Choose the two or three parts of the wedding you care about most before dividing the money. A couple who prioritizes photography and food should have a different allocation than a couple who wants an elaborate venue and packed dance floor."], bullets:["Venue and guest experience","Photography and video","Food and drinks","Music and entertainment","Flowers and design","Planning and coordination"]},
      {heading:"Remember the costs that hide between categories", bullets:["Taxes and service charges","Delivery and travel fees","Rental upgrades","Alterations and beauty trials","Postage and stationery extras","Vendor meals","Overtime","Tips and gratuities","Marriage license and insurance","Last-minute purchases"]},
      {heading:"Use a range, not a rigid percentage", paragraphs:["Traditional percentage charts can be useful as a starting point, but they should not force you to spend on things you do not value. My Portland Wedding's Wedding Builder starts with your budget, vibe and priorities and turns them into category-by-category planning targets and local vendor matches."]}
    ],
    checklist:["Set your comfortable maximum budget","Estimate your guest count","Choose your top three priorities","Reserve money for fees and last-minute costs","Compare all-in vendor pricing","Use Wedding Builder to test your allocation before booking"],
    faq:[
      {question:"What is a realistic wedding budget in Portland?",answer:"There is no single realistic number for every couple. Start with the amount you can comfortably spend, your guest count and your top priorities, then price the vendor categories that matter most to you."},
      {question:"What makes a Portland wedding more expensive?",answer:"Guest count, venue choice, food and beverage, rentals, season and the level of service or design you choose are common cost drivers."},
      {question:"How much should I hold back for unexpected wedding costs?",answer:"A contingency reserve is useful for fees, upgrades and last-minute needs. The right amount depends on your contracts and how much uncertainty remains in your plan."}
    ]
  },
  {
    slug:"portland-wedding-budget-guide",
    category:"Budget",
    title:"Portland Wedding Budget Guide: How to Divide Your Budget by Priority",
    dek:"A category-by-category approach to building a Portland wedding budget that reflects what you actually care about.",
    readTime:"8 min read",
    sections:[
      {heading:"Start with your non-negotiable total", paragraphs:["Decide what you can spend before browsing packages. Your budget should be a decision-making tool, not a scorecard that grows every time you see another idea online."]},
      {heading:"Protect the categories that matter most", paragraphs:["Rank your priorities before assigning money. If the venue is your dream, protect it. If photos are the thing you will keep forever, give photography room. If your people care about dinner and dancing, put more toward catering, bar and entertainment."]},
      {heading:"Plan the major categories", bullets:["Venue","Catering and bar","Photography and videography","Planning and coordination","Flowers and design","DJ, band or live entertainment","Attire and beauty","Cake and desserts","Rentals and lighting","Stationery","Transportation and lodging","Ceremony and officiant"]},
      {heading:"Look for intentional tradeoffs", paragraphs:["Saving money works best when you remove or simplify something that matters less—not when you make every category slightly worse. A simpler floral plan could protect photography. A smaller guest list could create room for a better meal. A Friday or off-season date may open different venue options."]},
      {heading:"Rebalance as quotes come in", paragraphs:["Your first budget is a hypothesis. Replace estimates with real quotes as you receive them and move unused money toward categories that matter more. Wedding Builder is designed to help you see those tradeoffs instead of treating every allocation as fixed."]}
    ],
    faq:[{question:"Should every wedding use the same budget percentages?",answer:"No. Percentages are only a starting point. Your allocations should reflect your priorities, guest count, venue and actual vendor quotes."},{question:"When should we create our wedding budget?",answer:"Create a working budget before signing major contracts, then update it whenever you receive a real quote or make a booking."}]
  },
  {
    slug:"best-portland-wedding-venues-guide",
    category:"Venues",
    title:"Best Portland Wedding Venues: How to Find the Right One for Your Day",
    dek:"A local venue-search guide for comparing Portland spaces by style, guest count, weather plan, inclusions and total cost.",
    readTime:"8 min read",
    sections:[
      {heading:"The best venue is the one that fits your wedding", paragraphs:["A venue can photograph beautifully and still be wrong for your guest count, budget or wedding-day flow. Start with the experience you want, then compare spaces using the same criteria."]},
      {heading:"Choose your Portland venue style", bullets:["Downtown and urban spaces","Garden and greenhouse settings","Forest and Pacific Northwest venues","Vineyard and wine-country settings","Historic buildings and estates","Modern industrial spaces","Hotels and full-service venues","Small restaurants and intimate spaces"]},
      {heading:"Compare total cost, not just the rental fee", paragraphs:["Ask what is included before comparing prices. Tables, chairs, staffing, cleanup, catering requirements and rentals can make two similar-looking venue fees produce very different final totals."]},
      {heading:"Treat the rain plan like part of the venue", paragraphs:["For an outdoor Portland wedding, tour the backup ceremony and reception setup—not just the sunny-day version. Ask when weather decisions are made and whether the backup still accommodates your full guest count comfortably."]},
      {heading:"Shortlist before you tour", paragraphs:["Use your guest count, wedding area, budget and preferred atmosphere to narrow the list. Then tour only the spaces that can realistically work. You can browse local venue profiles on My Portland Wedding and use Wedding Builder to connect venue choices with the rest of your budget."]}
    ],
    checklist:["Confirm capacity","Ask what is included","See the rain plan","Check parking and transportation","Review catering and alcohol rules","Confirm setup and breakdown time","Ask about noise restrictions","Request a complete sample contract"],
    faq:[{question:"How many Portland wedding venues should we tour?",answer:"There is no required number. A focused shortlist of venues that already fit your budget, capacity and style is usually more useful than touring spaces that cannot meet your needs."},{question:"What should we compare besides venue price?",answer:"Compare inclusions, staffing, rentals, food and beverage rules, rain backup, access hours, parking, accessibility and any required vendors or minimums."}]
  },
  {
    slug:"affordable-portland-wedding-venues",
    category:"Venues",
    title:"Affordable Portland Wedding Venues: How to Find More Value Without Sacrificing the Day",
    dek:"Smart ways to compare Portland venue costs, inclusions and flexible options when keeping the overall wedding budget matters.",
    readTime:"7 min read",
    sections:[
      {heading:"Affordable should mean lower total cost", paragraphs:["A low rental fee is not automatically a low-cost venue. A space that includes tables, chairs, staffing or cleanup may cost less overall than a cheaper blank space requiring separate rentals and labor."]},
      {heading:"Look beyond Saturday night", bullets:["Friday celebrations","Sunday weddings","Weekday weddings","Off-season dates","Brunch or daytime receptions","Shorter event windows","Ceremony-only or reception-only rentals"]},
      {heading:"Consider spaces that need less transformation", paragraphs:["A naturally beautiful room, garden or landscape can reduce the amount of décor needed to create atmosphere. When touring, ask yourself what you would still need to rent, cover, light or decorate."]},
      {heading:"Use guest count as a budget lever", paragraphs:["A smaller guest list can open venues that would not work for a large wedding and can reduce costs across catering, bar, rentals and stationery at the same time."]},
      {heading:"Ask for the all-in estimate", paragraphs:["Before comparing finalists, request the expected venue total with mandatory fees and required services. Then list the major items you would still need to bring in separately."]}
    ],
    faq:[{question:"How can we save money on a Portland wedding venue?",answer:"Flexible dates, smaller guest counts, included rentals and choosing a space that needs less added décor can all reduce the total cost. Compare the complete event cost rather than the rental fee alone."}]
  },
  {
    slug:"outdoor-wedding-venues-portland-guide",
    category:"Venues",
    title:"Outdoor Wedding Venues Near Portland: What to Know Before You Book",
    dek:"A Portland-area outdoor venue guide covering weather backup, guest comfort, sound, power, accessibility and logistics.",
    readTime:"7 min read",
    sections:[
      {heading:"Fall in love with the backup plan too", paragraphs:["The most important outdoor-venue question is what happens when the weather changes. Ask to physically see the backup location and understand whether your ceremony, dinner and dancing can all function there."]},
      {heading:"Think about guest comfort", bullets:["Shade for warm afternoons","Heat for cool evenings","Stable walking surfaces","Accessible routes","Nearby restrooms","Water stations","Bug and wind considerations","Blankets or umbrellas when appropriate"]},
      {heading:"Ask about power and sound", paragraphs:["Outdoor ceremonies and receptions may need power for microphones, music, lighting, catering and entertainment. Confirm where power comes from, whether generators are allowed and whether the property has sound limits."]},
      {heading:"Understand the setup window", paragraphs:["Outdoor events often require more setup than couples expect. Ask when rentals and vendors can arrive, what can remain overnight and who is responsible for breakdown."]},
      {heading:"Plan transportation before invitations go out", paragraphs:["For venues outside central Portland, think through parking, rideshare availability, shuttle timing and the return trip at the end of the night."]}
    ],
    faq:[{question:"What is the most important question for an outdoor Portland wedding venue?",answer:"Ask to see the actual weather backup plan and confirm that it works for your guest count and the parts of the celebration you intend to host outdoors."}]
  },
  {
    slug:"portland-wedding-photographer-cost-guide",
    category:"Photography",
    title:"Portland Wedding Photographer Prices: What Couples Should Compare",
    dek:"A practical guide to photography packages, coverage, deliverables and the questions that matter more than comparing one starting price.",
    readTime:"7 min read",
    sections:[
      {heading:"Compare the package, not just the number", paragraphs:["Photography pricing reflects more than hours at the wedding. Editing, experience, second photographers, engagement sessions, albums, travel and delivery can all affect what is included."]},
      {heading:"Decide how much of the story you want documented", bullets:["Getting ready","First look","Ceremony","Family portraits","Wedding party portraits","Couple portraits","Cocktail hour","Reception details","Toasts and dances","Open dancing","Private last dance or exit"]},
      {heading:"Style and trust matter", paragraphs:["Look through complete wedding galleries, not only highlight reels. Pay attention to indoor light, rain, family photos, receptions and movement. The photographer will also spend a large portion of the day close to you, so communication style matters."]},
      {heading:"Ask what happens after the wedding", bullets:["Estimated gallery delivery time","Number or range of edited images","Download and printing rights","Backup and archive policy","Album options","Sneak-peek timing"]},
      {heading:"Give photography the weight it deserves in your budget", paragraphs:["If photography is your number-one priority, your budget should reflect that. Wedding Builder lets you mark photography as a top priority so the rest of the plan can flex around it."]}
    ],
    faq:[{question:"What should we ask a Portland wedding photographer before booking?",answer:"Ask to see full galleries, confirm coverage hours and deliverables, understand the editing and delivery timeline, review backup plans and make sure the photographer's communication style fits you."},{question:"Is a second photographer necessary?",answer:"Not for every wedding. It can be useful for simultaneous getting-ready coverage, larger guest counts, multiple locations or additional ceremony and reception angles."}]
  },
  {
    slug:"portland-wedding-planning-checklist",
    category:"Planning",
    title:"Portland Wedding Planning Checklist: From Engagement to Wedding Week",
    dek:"A practical Portland wedding timeline that keeps the big bookings, guest logistics and final details in the right order.",
    readTime:"10 min read",
    sections:[
      {heading:"First: build the foundation", bullets:["Set a comfortable budget","Estimate guest count","Choose top priorities","Discuss season and preferred dates","Build a venue shortlist","Decide whether you want a planner"]},
      {heading:"Book the vendors with limited dates", bullets:["Venue","Planner or coordinator","Photographer","Videographer","Caterer and bar if not included","DJ, band or entertainment"]},
      {heading:"Build the look and guest experience", bullets:["Florist and design","Rentals and lighting","Attire","Hair and makeup","Cake and desserts","Stationery","Transportation and lodging"]},
      {heading:"Two to three months out", bullets:["Finalize invitations and RSVPs","Confirm ceremony details","Plan seating approach","Review vendor timelines","Confirm menu and bar","Schedule final fittings","Prepare photo-family list"]},
      {heading:"Wedding month and week", bullets:["Finalize guest count","Confirm vendor arrival times","Watch the weather plan","Prepare payments and tips","Pack details for photography","Delegate gifts, cards and décor pickup","Protect time to sleep, eat and enjoy the week"]}
    ],
    faq:[{question:"What should we book first for a Portland wedding?",answer:"The venue usually comes first because it establishes the date and affects many other vendor decisions. A full-service planner may be hired before the venue if you want help with the search."}]
  },
  {
    slug:"best-time-year-portland-wedding",
    category:"Planning",
    title:"Best Time of Year to Get Married in Portland: A Season-by-Season Guide",
    dek:"What each Portland wedding season can offer, plus the weather, daylight and guest-comfort questions to consider before choosing a date.",
    readTime:"7 min read",
    sections:[
      {heading:"Spring: fresh, green and changeable", paragraphs:["Spring can deliver the lush Pacific Northwest look couples love, but outdoor plans should have a strong rain backup. Think about covered portraits, pathways and guest comfort."]},
      {heading:"Summer: long days and outdoor flexibility", paragraphs:["Longer daylight can create more flexibility for portraits and outdoor celebrations. Ask venues about shade, cooling, wildfire-smoke contingencies and how late outdoor music can continue."]},
      {heading:"Fall: color, texture and earlier sunsets", paragraphs:["Fall can bring beautiful color and a cozy atmosphere. As daylight shortens, work with your photographer and planner on ceremony timing so portraits do not unexpectedly land after dark."]},
      {heading:"Winter: intimate atmosphere and indoor focus", paragraphs:["Winter weddings can feel especially warm and intentional indoors. Confirm heating, coat storage, transportation and any weather-related travel considerations for guests."]},
      {heading:"Choose the season that supports your priorities", paragraphs:["There is no universally best Portland wedding month. Choose based on the experience you want, your venue's strengths, guest travel and how comfortable you are with a weather backup."]}
    ],
    faq:[{question:"What is the best month to get married in Portland?",answer:"There is no single best month for every couple. The right date depends on whether you prioritize outdoor weather, long daylight, seasonal atmosphere, guest travel or venue availability."}]
  },
  {
    slug:"portland-micro-wedding-guide",
    category:"Planning",
    title:"Portland Micro-Wedding Guide: Planning a Smaller Celebration That Still Feels Special",
    dek:"How to use a smaller guest list to create a more personal Portland wedding without making the day feel like a scaled-down afterthought.",
    readTime:"7 min read",
    sections:[
      {heading:"Define small for your wedding", paragraphs:["A micro-wedding is less about hitting an exact guest-count definition and more about intentionally planning for a smaller group. Decide who you genuinely want present before choosing the space."]},
      {heading:"Use the smaller guest list intentionally", bullets:["Upgrade the meal or drinks","Choose a distinctive smaller venue","Create one long dinner table","Spend more time with each guest","Plan a weekend or multi-event experience","Put more budget toward photography, music or design"]},
      {heading:"Choose a venue that feels full at your size", paragraphs:["A beautiful space that is too large can make an intimate wedding feel sparse. Ask venues which rooms or layouts they recommend for your guest count."]},
      {heading:"Do not skip structure", paragraphs:["Smaller weddings still benefit from a timeline, ceremony plan, meal flow and someone responsible for logistics. Intimate does not have to mean improvised."]},
      {heading:"Make the experience personal", paragraphs:["With fewer guests, handwritten notes, shared meals, meaningful toasts and interactive details become easier to execute and more noticeable."]}
    ],
    faq:[{question:"Can a micro-wedding still include traditional wedding vendors?",answer:"Yes. Couples can still hire photography, planning, florals, music, catering and other vendors; the smaller guest count simply changes the scale and priorities."}]
  },
  {
    slug:"how-to-choose-portland-wedding-vendors",
    category:"Vendors",
    title:"How to Choose Wedding Vendors in Portland Without Getting Overwhelmed",
    dek:"A practical process for turning hundreds of Portland wedding options into a vendor team that fits your budget, style and priorities.",
    readTime:"8 min read",
    sections:[
      {heading:"Start with your wedding, not the vendor list", paragraphs:["Before comparing businesses, write down your budget, guest count, wedding area, vibe and top priorities. Those decisions eliminate options that are not a fit and make every vendor conversation more useful."]},
      {heading:"Compare fit before price", bullets:["Does their work match your style?","Do they regularly serve weddings like yours?","Can they handle your guest count and location?","Does their communication feel clear?","Is the package built around what you need?","Do the contract and policies make sense?"]},
      {heading:"Ask for complete pricing", paragraphs:["Starting prices can help with an initial filter, but compare the likely total for your wedding. Ask about travel, delivery, service charges, overtime, assistants, rentals and upgrades that may apply."]},
      {heading:"Look at recent, complete work", paragraphs:["For visual vendors, ask for full galleries or complete examples. For service vendors, read detailed reviews and ask how they handle timelines, changes and problems—not only what happens when everything goes perfectly."]},
      {heading:"Build a team, not a collection of individual bookings", paragraphs:["Your vendors will work together. Share venue rules, timelines and major decisions early. Wedding Builder can help create a local vendor roster around your priorities so you begin with a more focused shortlist."]}
    ],
    checklist:["Define budget and guest count","Choose your top priorities","Shortlist by fit","Compare complete packages","Review recent work and reviews","Read contracts before paying","Confirm communication expectations","Save all signed agreements"],
    faq:[{question:"How many wedding vendors should we contact in each category?",answer:"There is no required number. Contact enough qualified vendors to understand fit, availability and pricing without creating a comparison list so large that it becomes difficult to evaluate."},{question:"Should price be the first filter?",answer:"Budget matters, but style, service, availability and what is included also determine value. Compare the expected total and the actual fit for your wedding."}]
  },
  {
    slug: "finding-a-portland-wedding-venue-that-fits-your-style",
    category: "Venues",
    title: "Finding a Portland wedding venue that fits your wedding style",
    dek: "A practical way to compare atmosphere, guest experience, logistics and cost before you fall in love with a space.",
    readTime: "7 min read",
    sections: [
      {heading:"Start with the feeling, not the floor plan", paragraphs:["Before comparing square footage and rental hours, decide how you want the day to feel. A candlelit dinner in an intimate room creates a different experience than an airy garden ceremony or an energetic downtown reception.","Write down three words you want guests to use when they describe the wedding. Use those words as a filter whenever you tour a space."]},
      {heading:"Choose the guest experience", bullets:["How far will guests travel between ceremony and reception?","Is parking, rideshare or transportation easy?","Are restrooms, climate control and accessibility appropriate for your group?","Is there a comfortable rain plan for an outdoor celebration?","Will older guests and families with children feel comfortable throughout the event?"]},
      {heading:"Compare what is actually included", paragraphs:["A lower venue fee is not always a lower total cost. One venue may include tables, chairs, getting-ready spaces, staffing and cleanup while another requires you to rent or hire each item separately."], bullets:["Tables and chairs","Linens or place settings","Setup and breakdown","On-site coordinator","Security or parking attendants","Getting-ready rooms","Ceremony rehearsal","Cleaning fees","Required vendors or beverage minimums"]},
      {heading:"Plan for Portland weather", paragraphs:["For outdoor or partially outdoor weddings, ask exactly when a weather decision must be made and what the backup setup looks like. A true rain plan should still feel intentional, not like an emergency compromise."]},
      {heading:"Look at the full wedding-day flow", paragraphs:["Walk the venue in the order guests will experience it: arrival, ceremony, cocktail hour, dinner, dancing and departure. Pay attention to bottlenecks, long walks and transitions that require major room flips."]}
    ],
    checklist:["Confirm your estimated guest count","Set an all-in venue budget","Choose 3 words that describe your desired atmosphere","Ask what is included in the rental fee","Ask about service charges, taxes and required minimums","Confirm ceremony and reception capacity","See the rain/weather backup location","Ask about catering and alcohol rules","Ask about music/noise restrictions","Confirm setup and cleanup times","Check parking and transportation options","Review accessibility","Ask about required insurance","Request a sample contract before paying a deposit"]
  },
  {
    slug:"which-wedding-vendors-should-you-book-first",
    category:"Planning",
    title:"Which wedding vendors should you book first?",
    dek:"A simple order of operations for building your Portland wedding team without creating unnecessary stress.",
    readTime:"6 min read",
    sections:[
      {heading:"1. Venue", paragraphs:["Your venue locks in the date and affects almost every other vendor decision, from catering rules to transportation and rental needs. Secure this first unless you are working with a planner who is helping with venue selection."]},
      {heading:"2. Planner or coordinator", paragraphs:["If you want full-service or partial planning, hiring early lets your planner guide the decisions that follow. Month-of coordination can usually be booked later, but popular coordinators still fill dates well in advance."]},
      {heading:"3. Photographer and videographer", paragraphs:["Photo and video teams can only serve one wedding at a time. Once your date is firm, book the people whose style and personality feel right for you."]},
      {heading:"4. Catering and bar", paragraphs:["If catering is not included with your venue, confirm food and beverage early. Menus, staffing, rentals and bar requirements can make up a significant part of the budget."]},
      {heading:"5. Entertainment", paragraphs:["Bands and in-demand DJs often book far ahead. Music also affects ceremony audio, reception flow and venue sound requirements."]},
      {heading:"Then build the rest of your team", bullets:["Florist and event design","Hair and makeup","Cake and desserts","Rentals and lighting","Officiant","Transportation","Stationery","Photo booth and specialty entertainment","Content creator","Honeymoon or travel support"]}
    ],
    checklist:["Book venue","Book planner/coordinator","Book photographer","Book videographer","Book caterer","Book bartender/bar service","Book DJ or band","Book florist","Book hair and makeup","Book cake/dessert","Reserve rentals and lighting","Book officiant","Arrange transportation","Order invitations/stationery","Book photo booth/entertainment","Book content creator if desired"]
  },
  {
    slug:"ways-to-make-your-portland-wedding-feel-more-personal",
    category:"Local Ideas",
    title:"Ways to make your Portland wedding feel more personal",
    dek:"Thoughtful details that connect your celebration to the city, your story and the people you love.",
    readTime:"5 min read",
    sections:[
      {heading:"Use Portland as inspiration, not a theme", paragraphs:["A local wedding does not need to be covered in city icons. Small choices—seasonal Pacific Northwest ingredients, locally roasted coffee, Oregon wine, native greenery or a neighborhood-inspired welcome note—can make the day feel rooted here without becoming overly themed."]},
      {heading:"Tell your story through the guest experience", bullets:["Name signature drinks after meaningful places, pets or memories","Display a short relationship timeline near the guest book","Choose ceremony readings that actually reflect you","Use family recipes or favorite desserts","Create table names based on places you have traveled together"]},
      {heading:"Give guests something to do together", paragraphs:["Shared experiences often become the details people remember most. Consider lawn games, an audio guest book, live sketching, a photo booth, a late-night snack station or a musician during cocktail hour."]},
      {heading:"Build in quiet moments", paragraphs:["Personal weddings are not only about décor. Schedule a private first look, ten minutes alone after the ceremony, or a private last dance. Those moments often become the emotional anchors of the day."]}
    ],
    checklist:["Choose 2–3 personal details instead of trying to personalize everything","Include one local Portland or Oregon touch","Add a meaningful ceremony reading or ritual","Plan one interactive guest experience","Create a signature food or drink moment","Schedule one private moment for the two of you"]
  },
  {
    slug:"questions-to-ask-on-a-wedding-venue-tour",
    category:"Venues",
    title:"35 questions to ask on a wedding venue tour",
    dek:"Take this list with you so you can compare Portland venues on more than looks alone.",
    readTime:"8 min read",
    sections:[
      {heading:"Availability and timing", bullets:["Is our date available?","How many weddings do you host in one day?","How many rental hours are included?","When can vendors begin setup?","What time must the event end?","Is rehearsal time included?"]},
      {heading:"Money and contract", bullets:["What is the rental fee?","What taxes and service charges are added?","What deposit is required?","What is the payment schedule?","What is the cancellation/postponement policy?","Are there minimum spends?","Is event insurance required?"]},
      {heading:"Food, drink and vendors", bullets:["Is catering in-house or can we choose our own?","Is there a preferred or required vendor list?","Can we bring our own alcohol?","Are there corkage or cake-cutting fees?","What kitchen/prep space is available?"]},
      {heading:"Spaces and logistics", bullets:["What is the seated capacity?","What is the rain plan?","Are tables and chairs included?","Are there getting-ready suites?","Is the property accessible?","How many restrooms are available?","Where do guests park?","Is rideshare pickup easy?","Are candles or open flames permitted?","Are there décor restrictions?","Are there sound limits?","Is there power for a band/DJ?","Who handles setup and cleanup?","Who is on site during the event?","Can we leave items overnight?","Is there a secure place for gifts/cards?","Where do vendors load in?","Are pets allowed?","What hotel options are nearby?"]}
    ]
  },
  {
    slug:"how-to-build-a-wedding-budget-that-feels-realistic",
    category:"Budget",
    title:"How to build a wedding budget that feels realistic",
    dek:"Start with priorities and total cost instead of guessing category percentages.",
    readTime:"7 min read",
    sections:[
      {heading:"Start with the money that actually exists", paragraphs:["Before researching vendors, decide the amount you are comfortable spending and identify who is contributing. Avoid building a plan around money that has not been clearly offered or committed."]},
      {heading:"Pick your top three priorities", paragraphs:["If photography, food and a beautiful venue matter most, protect those categories first. Your budget should reflect what you value rather than an internet template."]},
      {heading:"Track all-in pricing", bullets:["Base price","Taxes","Service charges","Gratuities","Delivery and travel","Rentals","Overtime","Alterations","Postage","Vendor meals","Insurance","Tips and last-minute purchases"]},
      {heading:"Keep a reserve", paragraphs:["Hold back roughly 5–10% of your working budget for forgotten details and late changes. It is much easier to enjoy an unused reserve at the end than to discover one was needed a month before the wedding."]}
    ],
    checklist:["Set total comfortable spend","List confirmed financial contributions","Choose top 3 priorities","Estimate guest count","Collect all-in vendor quotes","Create a 5–10% reserve","Track deposits and due dates","Review budget monthly","Update totals after every signed contract"]
  },
  {
    slug:"portland-wedding-weather-and-season-guide",
    category:"Portland Guide",
    title:"A practical Portland wedding weather and season guide",
    dek:"What to consider when planning around rain, heat, daylight and seasonal guest comfort in the Portland area.",
    readTime:"6 min read",
    sections:[
      {heading:"Spring", paragraphs:["Spring can deliver lush greenery and beautiful blooms, but outdoor plans should have a polished rain backup. Covered cocktail spaces and flexible portrait locations are especially valuable."]},
      {heading:"Summer", paragraphs:["Summer offers long evenings and strong outdoor possibilities. Ask about shade, air conditioning, water stations and wildfire-smoke contingencies for outdoor celebrations."]},
      {heading:"Fall", paragraphs:["Early fall can blend comfortable temperatures with rich seasonal color. As the season progresses, build earlier portrait and ceremony times around shorter daylight."]},
      {heading:"Winter", paragraphs:["Winter weddings can feel intimate and atmospheric. Prioritize indoor guest comfort, covered arrivals, coat storage and a photo plan that does not depend entirely on daylight."]}
    ],
    checklist:["Ask venue for rain plan","Confirm heating/AC","Build daylight into photography timeline","Plan covered guest arrival","Have umbrellas available if needed","Discuss smoke/air-quality backup for summer outdoor events","Confirm indoor portrait options","Communicate attire/weather guidance to guests"]
  }
  ,{
    slug:"diy-wedding-ideas-portland-budget",
    category:"Budget",
    title:"DIY wedding ideas for Portland couples: where to save and where to simplify",
    dek:"Your wedding budget does not need to fund every possible category. Here’s a practical way to decide what to DIY, simplify, borrow or skip—and what deserves professional help.",
    readTime:"9 min read",
    sections:[
      {heading:"First: you do not need every wedding category", paragraphs:["A wedding budget is a set of choices, not a checklist of things you are required to buy. If dividing your total across every possible category leaves tiny amounts that do not meaningfully help your day, it can make more sense to combine, simplify, DIY or skip some details entirely.","Start by protecting the parts of the wedding you care about most. Then look at the smaller categories and ask a simple question: will spending here noticeably improve our experience or our guests’ experience?"]},
      {heading:"Good DIY candidates", bullets:["Simple ceremony programs, menus, place cards and signage","Digital save-the-dates or simple stationery assembly","Welcome signs and table numbers using a consistent template","Small floral moments such as bud vases or greenery when setup is realistic","Dessert displays using favorite local treats instead of a large custom cake","A phone-based behind-the-scenes content plan shared with trusted friends","A curated playlist for low-key portions of the day when professional sound is not required","Simple photo-area props or a guest-photo station","Borrowed or repurposed décor that does not require complicated installation"]},
      {heading:"Simplify before you DIY", paragraphs:["DIY is not automatically cheaper once materials, tools, test runs, transportation, setup and cleanup are included. Before starting a project, see whether the same savings can come from making the idea simpler."], bullets:["Use one statement floral installation instead of decorating every surface","Choose one printed sign instead of a full matching sign collection","Serve one memorable dessert instead of a large dessert table","Use venue-provided furniture before renting specialty pieces","Choose fewer invitation pieces and put extra information on your wedding website","Use décor that can move from ceremony to reception"]},
      {heading:"Things to be careful about DIYing", paragraphs:["Some jobs carry more timing, safety, legal or logistical responsibility than they appear to. A low budget does not mean you must hire a professional for every one of these, but understand the responsibility before deciding."], bullets:["Food preparation or service for a large guest count","Alcohol service and any required permits or venue rules","Electrical work, suspended décor or complicated installations","Transportation for guests","Ceremony requirements and marriage-license responsibilities","Sound for a ceremony where guests need to clearly hear vows","Hair or makeup if the wedding-day timeline leaves no room for a redo"]},
      {heading:"Use the 3-hour test", paragraphs:["For each DIY idea, estimate the real time it will take to design, shop, make, revise, pack, transport, set up and clean up. If the project keeps expanding, compare the savings with the time and stress it creates. A project can be inexpensive and still be costly to your week."]},
      {heading:"Give every DIY project an owner", paragraphs:["Do not make yourself the default setup crew. Every DIY item should have a named person responsible for getting it to the venue, placing it correctly and taking it home afterward. If nobody can own those steps, simplify the idea or remove it."]},
      {heading:"A Portland-friendly way to think about it", paragraphs:["Local weddings can feel personal without buying more things. Seasonal greenery, favorite neighborhood foods, locally made treats, reusable décor, borrowed pieces and a few meaningful details can create a strong sense of place without filling every category in the budget."]},
      {heading:"How to use this with Wedding Builder", paragraphs:["Wedding Builder gives every category a planning allocation so you can see the tradeoffs. When an allocation is small, treat it as a decision point—not a command to spend that amount. Keep it, move it to a priority, simplify that category, or use a DIY approach. Your total budget should serve your wedding, not the other way around."]}
    ],
    checklist:["Protect your top three priorities first","Circle categories that feel optional to you","Simplify before buying DIY supplies","Estimate materials plus your real time","Assign one person to transport/setup each DIY project","Check venue rules before making décor or food plans","Avoid starting new DIY projects during wedding week","Move unused category money back to your highest priorities"]
  }
];

export const planningChecklists = [
  {slug:"master-wedding-checklist", title:"Master Wedding Checklist", eyebrow:"Timeline", intro:"A start-to-finish planning roadmap you can check off as you go.", sections:[
    {title:"12–18 months before", items:["Set a realistic total budget","Draft your guest list","Choose your preferred season/date range","Research and tour venues","Book your venue","Hire a full-service planner if using one","Create a wedding website","Start a vendor inspiration folder"]},
    {title:"9–12 months before", items:["Book photographer","Book videographer","Book caterer/bar if separate","Book DJ or band","Book florist","Begin attire shopping","Reserve guest hotel blocks if needed","Schedule engagement photos"]},
    {title:"6–9 months before", items:["Book hair and makeup","Book officiant","Order wedding attire","Book cake/dessert","Reserve rentals and lighting","Arrange transportation","Send save-the-dates","Plan honeymoon","Build registry"]},
    {title:"3–6 months before", items:["Finalize menu","Choose ceremony details","Order invitations","Plan rehearsal dinner","Choose wedding party attire","Confirm floral/design direction","Book photo booth or specialty entertainment","Plan favors/welcome gifts if desired"]},
    {title:"1–3 months before", items:["Mail invitations","Finalize ceremony script","Build reception timeline","Create shot-list priorities","Schedule final fittings","Apply for marriage license within appropriate timeframe","Create seating plan","Confirm final vendor details","Prepare vendor payments/tips"]},
    {title:"Final 2 weeks", items:["Give final guest count","Confirm transportation","Confirm vendor arrival times","Pack décor and personal items","Prepare emergency kit","Break in wedding shoes","Share timeline with wedding party","Assign someone to collect gifts/cards","Confirm weather backup plan"]},
    {title:"Wedding day", items:["Eat and hydrate","Keep marriage license/rings secure","Have payment/tip envelopes ready","Give phone to a trusted person during key moments","Take a private moment together","Enjoy the day"]},
    {title:"After the wedding", items:["Return rentals","Preserve attire if desired","Send thank-you notes","Leave vendor reviews","Select album photos","Update legal name/documents if applicable"]}
  ]},
  {slug:"venue-tour-checklist", title:"Wedding Venue Tour Checklist", eyebrow:"Venues", intro:"Use the same questions at every tour so you can compare spaces fairly.", sections:[
    {title:"Before the tour",items:["Know estimated guest count","Know comfortable venue budget","Bring phone/camera for notes and photos","List your non-negotiables","Confirm date availability"]},
    {title:"Space and experience",items:["See ceremony space","See cocktail-hour space","See reception space","See rain backup","Check getting-ready rooms","Check restrooms","Check accessibility","Walk guest arrival path","Check dance-floor size","Look at indoor and outdoor photo locations"]},
    {title:"Included items",items:["Tables","Chairs","Linens","Place settings","Setup","Cleanup","On-site coordinator","Security","Parking staff","Rehearsal time"]},
    {title:"Rules and logistics",items:["Confirm event hours","Confirm vendor access time","Ask about music/noise limits","Ask about décor/candle restrictions","Ask about catering rules","Ask about alcohol rules","Ask about required vendors","Ask about event insurance","Ask about parking/rideshare","Ask about overnight item storage"]},
    {title:"Pricing",items:["Get base fee in writing","Ask about taxes","Ask about service charges","Ask about minimum spends","Ask about deposits","Ask about payment schedule","Ask about overtime rates","Ask about cancellation/postponement policy"]}
  ]},
  {slug:"vendor-booking-checklist", title:"Vendor Booking Checklist", eyebrow:"Vendors", intro:"A practical order for assembling your wedding team.", sections:[
    {title:"Book first",items:["Venue","Planner or coordinator","Photographer","Videographer","Caterer/bar","DJ or band"]},
    {title:"Book next",items:["Florist/event designer","Hair and makeup","Cake/dessert","Rentals/lighting","Officiant","Transportation"]},
    {title:"Finishing team",items:["Stationery","Photo booth","Content creator","Live entertainment","Guest accommodations","Honeymoon/travel support"]},
    {title:"Before signing every contract",items:["Review total price and payment schedule","Confirm exact hours of coverage","Confirm cancellation/rescheduling terms","Confirm travel/delivery charges","Confirm insurance requirements","Confirm what happens if the vendor is unavailable","Save a signed copy of the contract"]}
  ]},
  {slug:"wedding-budget-checklist", title:"Wedding Budget Checklist", eyebrow:"Budget", intro:"Keep the real cost visible from first deposit through final payment.", sections:[
    {title:"Build the budget",items:["Set total comfortable spend","Confirm contributions","Choose top 3 priorities","Estimate guest count","Create 5–10% contingency reserve"]},
    {title:"Track categories",items:["Venue","Catering","Bar","Photography","Videography","Planning/coordination","Florals/design","Music/entertainment","Attire/alterations","Beauty","Cake/desserts","Rentals/lighting","Stationery/postage","Transportation","Accommodations","Officiant/license","Favors/gifts","Honeymoon","Tips/miscellaneous"]},
    {title:"For every vendor",items:["Record contracted total","Record deposit paid","Record remaining balance","Record due date","Include tax/service fee","Include delivery/travel","Include gratuity if applicable"]}
  ]},
  {slug:"wedding-week-checklist", title:"Wedding Week Checklist", eyebrow:"Final Week", intro:"A calm, practical list for the final seven days.", sections:[
    {title:"Confirm",items:["Final vendor arrival times","Final guest count","Transportation schedule","Rehearsal details","Weather plan","Ceremony processional order","Who has rings and marriage license","Who handles gifts/cards","Who takes décor home"]},
    {title:"Pack",items:["Wedding attire and accessories","Shoes","Rings","Vows","Marriage license","Invitation suite for photos","Details for flat-lay photos","Emergency kit","Touch-up beauty products","Comfortable change of shoes","Vendor payment/tip envelopes"]},
    {title:"Protect your time",items:["Finish major DIY projects","Delegate unanswered guest questions","Hydrate and sleep","Avoid last-minute major design changes","Schedule a quiet meal or date together"]}
  ]},
  {slug:"photography-planning-checklist", title:"Wedding Photography Checklist", eyebrow:"Photography", intro:"Help your photographer capture the people and details that matter most without turning the day into a photo shoot.", sections:[
    {title:"Before the wedding",items:["Share final timeline","Share venue addresses","List important family combinations","Note sensitive family dynamics","Identify meaningful details/heirlooms","Share any venue photo restrictions","Plan rain portrait locations","Confirm sunset timing with photographer"]},
    {title:"Details to gather",items:["Invitation suite","Rings","Vow books","Shoes","Jewelry","Perfume/cologne","Bouquet","Family heirlooms","Special gifts/letters"]},
    {title:"Must-consider moments",items:["Getting ready","First look if doing one","Wedding party portraits","Immediate family portraits","Ceremony reactions","Couple portraits","Reception room before guests enter","First dance","Parent dances","Toasts","Dance floor","Private last dance/send-off"]}
  ]},
  {slug:"guest-experience-checklist", title:"Guest Experience Checklist", eyebrow:"Guests", intro:"Small logistics that make a wedding feel thoughtful and effortless for the people attending.", sections:[
    {title:"Before the wedding",items:["Clear directions on wedding website","Hotel recommendations","Transportation details","Dress-code guidance","Weather guidance","Accessibility contact information","RSVP deadline","Meal/allergy collection"]},
    {title:"At the venue",items:["Easy-to-find parking/arrival","Clear signage","Comfortable ceremony seating","Accessible restrooms","Water available","Shade/heating as needed","Enough cocktail-hour seating","Efficient bar service","Logical table layout","Late-night transportation plan"]},
    {title:"Personal touches",items:["Welcome note","Local Portland recommendations","Thoughtful seating assignments","Meaningful music","Late-night snack","Simple thank-you/favor"]}
  ]}
];
