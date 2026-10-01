export type ArticleImage = { src: string; alt: string; caption?: string; credit?: string; creditUrl?: string };
export type ArticleSection = { heading: string; paragraphs?: string[]; bullets?: string[]; image?: ArticleImage; pullQuote?: string };
export type InspirationArticle = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  readTime: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
  updatedAt?: string;
  reviewedBy?: string;
  methodology?: string;
  quickFacts?: { value: string; label: string; context: string; sourceLabel?: string }[];
  sources?: { label: string; href: string }[];
  heroImage?: ArticleImage;
  relatedSlugs?: string[];
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
    readTime:"14 min read",
    seoTitle:"Portland Wedding Venues: How to Choose the Right Venue",
    seoDescription:"Compare Portland wedding venue styles, capacity, rain plans, inclusions, transportation and total cost with this in-depth local venue guide.",
    publishedAt:"2026-09-30T12:00:00-07:00",
    updatedAt:"2026-09-30T12:00:00-07:00",
    heroImage:{src:"/about/hero-couple.jpg",alt:"Wedding couple celebrating together",caption:"Start with how you want the day to feel—then find the Portland venue that supports it."},
    reviewedBy:"My Portland Wedding Editorial",
    methodology:"MPW combines practical local planning guidance with public Oregon and Portland information when it directly helps a venue decision.",
    quickFacts:[
      {value:"8:52 PM",label:"June 1 sunset in Portland",context:"A late-spring Portland wedding can still have daylight well into the reception. That gives couples more flexibility for an outdoor ceremony, portraits and cocktail hour before the light disappears.",sourceLabel:"Timeanddate — Portland sun data"},
      {value:"45 days",label:"the Portland park-wedding rush-fee line",context:"For a wedding in a Portland park, PP&R says permit requests should be made at least 45 days ahead to avoid rush fees. The venue decision can create a real planning deadline.",sourceLabel:"Portland Parks & Recreation"},
      {value:"5 people",label:"and your park ceremony needs a permit",context:"In a Portland public park, once the ceremony is more than the couple, officiant and two witnesses, City code requires a wedding permit when guests are invited. Tiny wedding? Still worth checking the rules.",sourceLabel:"Portland Parks & Recreation"}
    ],
    sources:[
      {label:"Portland Parks & Recreation — Wedding Reservations",href:"https://www.portland.gov/parks/wedding"}
    ],
    relatedSlugs:["affordable-portland-wedding-venues","outdoor-wedding-venues-portland-guide","portland-wedding-budget-guide"],
    sections:[
      {heading:"The best venue is the one that fits your wedding", paragraphs:["A venue can photograph beautifully and still be wrong for your guest count, budget or wedding-day flow. Start with the experience you want, then compare spaces using the same criteria.","In Portland, that means thinking beyond the ceremony backdrop. Consider how guests will arrive, where portraits can happen if the weather changes, how much of the property is truly yours during the rental window, and whether the venue's included services reduce or add to the work your vendor team must do."], pullQuote:"Choose the venue that makes the whole wedding easier—not simply the one that wins the first five minutes of the tour."},
      {heading:"Start with the wedding experience, not a list of addresses", paragraphs:["Before opening a dozen venue tabs, describe the day you want in plain language. Is it an intimate dinner with exceptional food, a packed dance floor, a garden ceremony, a formal evening downtown, or a relaxed weekend gathering? That description becomes a useful filter.","The right venue should support the parts of the wedding you care about most. A spectacular outdoor ceremony site may be less valuable to a couple prioritizing dinner and dancing than a room with strong acoustics, a comfortable floor plan and an experienced service team."], bullets:["How formal or relaxed should the day feel?","Do you want ceremony and reception in one place?","How important are outdoor spaces and views?","Will many guests be traveling from outside Portland?","Is food, dancing, photography or design a top priority?"]},
      {heading:"Match capacity to the way the room will actually be used", paragraphs:["A stated maximum capacity does not always describe the experience at that number. Ask to see floor plans for a guest count close to yours, including the dance floor, bar, buffet or service stations, DJ or band footprint and any lounge areas.","A venue that feels generous at 120 guests can feel completely different at its published maximum. Likewise, an oversized ballroom can make an intimate wedding feel sparse unless the venue can divide or reconfigure the room."], bullets:["Seated dinner capacity with a dance floor","Ceremony capacity in the rain-plan space","Cocktail-hour capacity","Accessible seating and routes","Space required for entertainment and rentals"]},
      {heading:"Turn your priorities into a venue scorecard", paragraphs:["Now turn the feeling you want into a short scorecard you can actually use on tours. Give every contender the same five or six tests—guest flow, rain plan, total cost, location, design flexibility and whatever matters most to you.","This keeps one dramatic view or beautiful room from overpowering the practical questions that decide whether the whole day works."], pullQuote:"A beautiful venue gets your attention. A venue that fits your priorities earns the booking."},
      {heading:"Pick a venue personality—not just a building", paragraphs:["Portland gives couples very different ways to set the tone. Use these as starting personalities rather than rigid labels; the best choice is the one that naturally supports your guest experience."], bullets:["CITY ENERGY — Downtown and urban spaces for easy hotel access, restaurants and an after-party nearby.","GARDEN ROMANCE — Gardens and greenhouse settings where the landscape does much of the decorating.","PNW ESCAPE — Forest and nature-forward venues for couples who want the region itself to be part of the experience.","WINE-COUNTRY WEEKEND — Vineyard settings that can turn the wedding into a destination-style weekend.","OLD-SOUL ELEGANCE — Historic buildings and estates with architectural character already built in.","MODERN CANVAS — Industrial and contemporary spaces that leave room for lighting, florals and personal design.","EASY-BUTTON CELEBRATION — Hotels and full-service venues that can simplify staffing, lodging and logistics.","DINNER-PARTY MAGIC — Restaurants and intimate spaces for smaller guest lists centered on food and conversation."]},
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
  },
  {
    slug:"how-to-choose-portland-wedding-photographer",
    category:"Photography",
    title:"How to Choose a Portland Wedding Photographer You’ll Still Love Years Later",
    dek:"A practical Portland guide to photography style, coverage, experience, communication, contracts and the questions that reveal whether a photographer really fits your wedding.",
    readTime:"12 min read",
    seoTitle:"How to Choose a Portland Wedding Photographer: Complete Guide",
    seoDescription:"Learn how to compare Portland wedding photographers by style, coverage, experience, contracts, galleries and fit before you book.",
    relatedSlugs:["portland-wedding-photographer-cost-guide","questions-to-ask-on-a-wedding-venue-tour","how-to-choose-portland-wedding-vendors"],
    sections:[
      {heading:"Start with how you want the wedding to feel in photographs",paragraphs:["Before comparing packages, decide what you want to remember when you open the gallery years from now. Some couples want documentary images that feel spontaneous and observant. Others are drawn to polished editorial portraits, true-to-life color, a darker cinematic finish or a bright romantic look.","Do not judge that from a photographer’s best twelve Instagram posts. Look for consistency across complete wedding galleries, including getting ready, ceremony, family portraits, reception lighting and the parts of the day that are harder to photograph."]},
      {heading:"Compare full galleries, not highlight reels",paragraphs:["A portfolio is designed to show a photographer’s strongest work. A complete gallery shows how they handle an entire wedding. Ask to see examples from celebrations with conditions similar to yours: indoor ceremonies, dark receptions, outdoor summer light, rainy Portland days or whatever resembles your plan."],bullets:["Look for consistent skin tones and color","Check indoor and low-light reception work","Notice whether candid moments feel natural","Review family and group photographs","See how details and room-wide scenes are documented"]},
      {heading:"Decide how much coverage your timeline actually needs",paragraphs:["Coverage should follow the story of the day rather than an arbitrary package number. Work backward from the moments you care about: getting ready, first look, ceremony, portraits, cocktail hour, dinner, speeches, dancing and any planned exit.","A photographer who understands timelines can help identify where coverage is valuable and where an extra hour may add little. If the wedding has multiple locations, travel time also belongs in the coverage calculation."]},
      {heading:"Ask who will actually photograph your wedding",paragraphs:["For studios with multiple photographers, confirm whether the person whose work you are viewing will be the person photographing your wedding. If an associate will cover it, review that photographer’s galleries and understand who edits and delivers the final images."]},
      {heading:"Read the contract like a planning document",paragraphs:["The agreement should make the practical expectations clear: coverage time, payment schedule, cancellation or rescheduling terms, image delivery, usage rights, backup procedures and what happens if the photographer becomes unavailable.","Clarify whether engagement sessions, second photographers, travel, albums, prints or rehearsal coverage are included or optional rather than assuming two similarly priced packages contain the same services."]},
      {heading:"Choose someone you are comfortable having close to you",paragraphs:["Your photographer may spend more time near you on the wedding day than almost any other vendor. Communication style matters. You should understand how they direct portraits, how much they intervene during candid moments and how they coordinate with planners and other vendors.","The strongest fit is not simply the portfolio you like most. It is the combination of work, reliability, communication, approach and coverage that matches the wedding you are actually planning."]}
    ],
    checklist:["Choose the photography style you are drawn to","Review at least one relevant full wedding gallery","Confirm who will photograph the wedding","Compare coverage rather than package names","Read delivery and usage terms","Ask about backups and emergencies","Make sure the communication style feels comfortable"],
    faq:[
      {question:"How early should you book a Portland wedding photographer?",answer:"Photographers can book popular dates well in advance, so begin researching once your date and venue are established. Availability varies by photographer, season and day of the week."},
      {question:"Do you need a second wedding photographer?",answer:"Not every wedding does. A second photographer can be useful for simultaneous getting-ready coverage, multiple angles, large guest counts or complicated timelines. Ask what a second photographer would add to your specific plan."},
      {question:"Should you ask to see a full wedding gallery?",answer:"Yes. Full galleries help you evaluate consistency across changing light, locations and parts of a wedding day rather than judging only a curated portfolio."}
    ]
  },
  {
    slug:"wedding-planner-vs-coordinator-portland",
    category:"Planning",
    title:"Wedding Planner vs. Coordinator: What Does Your Portland Wedding Actually Need?",
    dek:"Understand the practical difference between full planning, partial planning and wedding coordination so you can hire the level of help that fits your celebration.",
    readTime:"11 min read",
    seoTitle:"Wedding Planner vs Coordinator in Portland: What Do You Need?",
    seoDescription:"Compare Portland wedding planners and coordinators, what each service typically handles, when to hire and how to decide which level of support fits.",
    relatedSlugs:["portland-wedding-planning-checklist","which-wedding-vendors-should-you-book-first","how-to-choose-portland-wedding-vendors"],
    sections:[
      {heading:"The difference is mostly about when the professional becomes involved",paragraphs:["A full-service planner is generally involved throughout much of the planning process. Coordination is focused more heavily on turning an existing plan into an organized wedding day. Partial planning sits between those two ends of the spectrum.","Titles are not standardized, so compare the actual scope of work instead of assuming every company defines planner, coordinator or month-of service the same way."]},
      {heading:"Full-service planning is for couples who want a planning partner",paragraphs:["Full planning can include budget development, venue and vendor research, design direction, contract and timeline support, logistics, meetings and wedding-day management. The exact scope varies by company.","This level of support can be especially useful for complex weddings, couples planning from outside Oregon, demanding work schedules or anyone who wants professional involvement in the decisions leading up to the wedding—not only execution at the end."]},
      {heading:"Coordination is for plans that already have an owner",paragraphs:["A coordinator typically steps in later, learns the plan you have created, confirms logistics with vendors, develops or refines the timeline and manages execution around the wedding. That does not mean coordination is a small job; it means the couple usually owns more of the planning beforehand."],bullets:["Confirm when coordination officially begins","Ask whether vendor communication is included","Understand rehearsal coverage","Clarify setup and teardown responsibilities","Ask how timeline creation works","Confirm the number of on-site team members"]},
      {heading:"Partial planning can solve the middle-ground problem",paragraphs:["Some couples are comfortable making many decisions themselves but want professional help with the hardest pieces: finding a venue, building a budget, sourcing specific vendors or shaping the design. Partial planning can provide that support without transferring the entire planning process."]},
      {heading:"Compare scope before comparing price",paragraphs:["Two services with the same label can include very different amounts of work. Ask for a written description of responsibilities and identify what remains yours. A less expensive package is not necessarily less valuable, and a more comprehensive package is not automatically necessary.","The useful question is whether the service removes the work, uncertainty or wedding-day responsibility you actually want removed."]},
      {heading:"Your venue may change the answer",paragraphs:["Venue managers and venue coordinators are valuable, but their responsibilities are usually centered on the venue itself. Ask what your venue team handles for ceremony cues, personal décor, outside vendors, timeline management and end-of-night tasks before assuming separate coordination would duplicate their role."]}
    ],
    checklist:["List the planning tasks you want to keep","Identify the tasks you want someone else to own","Ask your venue exactly what its team coordinates","Compare written scopes of service","Confirm when the planner or coordinator begins working with you","Ask about rehearsal and wedding-day staffing"],
    faq:[
      {question:"Is a venue coordinator the same as a wedding coordinator?",answer:"Usually not. A venue coordinator commonly focuses on the property and venue responsibilities, while an independent wedding coordinator may oversee the broader vendor team, personal details and overall timeline. Ask each professional for their exact scope."},
      {question:"What is month-of coordination?",answer:"The term usually describes support that begins in the final stretch before the wedding and continues through wedding-day execution, but the start date and included work vary by company."},
      {question:"Can you hire a planner after you have already started planning?",answer:"Often, yes. Partial planning or customized services may be available, depending on the planner and how far along the wedding is."}
    ]
  }
,
  {
    slug:"portland-wedding-flower-cost-guide",
    category:"Florists",
    title:"Portland Wedding Flower Costs: How to Build a Floral Plan Around What Matters Most",
    dek:"A practical guide to the choices that shape wedding flower pricing, from bouquets and centerpieces to installations, labor, seasonality and repurposing.",
    readTime:"12 min read",
    seoTitle:"Portland Wedding Flower Costs: Budget & Planning Guide",
    seoDescription:"Understand what affects Portland wedding flower costs and how bouquets, centerpieces, installations, seasonality and labor shape a floral proposal.",
    relatedSlugs:["portland-wedding-budget-guide","how-to-choose-portland-wedding-vendors","best-time-year-portland-wedding"],
    sections:[
      {heading:"Wedding flower pricing is really a design-and-labor equation",paragraphs:["A floral proposal is not simply a price list for stems. The final number can reflect flower varieties, quantities, mechanics, vessels, delivery, setup, teardown, staffing and the time required to design each piece.","That is why two weddings with a similar number of bouquets and tables can have very different floral budgets. A low centerpiece in a simple vessel is a different production challenge from a suspended installation or a ceremony structure that must be built safely on site."]},
      {heading:"Start with the moments where flowers will have the most visual impact",paragraphs:["Instead of trying to put flowers everywhere, identify the scenes that matter most to you. Personal flowers appear in portraits throughout the day. Ceremony flowers frame a meaningful moment. Reception flowers influence what guests see for several hours.","A florist can often help concentrate the budget into a few memorable elements and simplify areas that will receive less attention."],bullets:["Bouquets and personal flowers","Ceremony focal point","Aisle or entry flowers","Cocktail-hour details","Guest-table centerpieces","Sweetheart or head table","Bar, cake or welcome-table flowers"]},
      {heading:"Seasonality affects availability more than it dictates your entire design",paragraphs:["Oregon has distinct growing seasons, but wedding floral design is not limited to flowers grown locally that week. Ask your florist which varieties, colors and textures are most dependable around your date and what substitutions they recommend if a specific flower is unavailable.","Being flexible about exact varieties can give the designer more room to protect the overall palette and feeling of the arrangement."]},
      {heading:"Large installations carry hidden work",paragraphs:["Arches, hanging flowers and other installations may require structures, mechanics, ladders, additional staff, venue access time and teardown. Ask whether those services are included in the proposal and whether the venue has restrictions on attachment methods, open flame, water, petals or cleanup."]},
      {heading:"Repurposing can create value when logistics allow it",paragraphs:["Ceremony arrangements may sometimes be moved to the reception, but repurposing is not automatically free or practical. The florist needs enough time, staff and access to move pieces safely while guests are transitioning.","Ask what can realistically be reused and where it will have the greatest impact instead of assuming every ceremony arrangement can become a reception centerpiece."]},
      {heading:"Compare proposals by scope, not just the bottom line",paragraphs:["Look at flower counts, approximate dimensions, vessel rentals, delivery, setup, teardown and substitutions. If two proposals are far apart, the designs may not actually be equivalent.","The best floral budget is one that protects the visual priorities you care about and gives the florist enough flexibility to execute them well."]}
    ],
    checklist:["Choose the floral moments that matter most","Share inspiration for feeling and palette, not only exact flowers","Ask what labor and rentals are included","Confirm venue setup and teardown windows","Discuss realistic repurposing opportunities","Understand substitution language in the agreement"],
    faq:[
      {question:"What affects the cost of wedding flowers most?",answer:"Scale, flower varieties, quantities, design complexity, installations, labor, delivery and setup can all affect the proposal. The mix matters more than any single item."},
      {question:"Can ceremony flowers be reused at the reception?",answer:"Sometimes. Whether it works depends on the design, distance, timing, staffing and venue access. Ask the florist which pieces can be moved safely and efficiently."},
      {question:"Do wedding flowers have to match the season?",answer:"Not necessarily, but season and availability can affect sourcing. Flexibility about exact varieties can help a florist preserve the overall color and design when availability changes."}
    ]
  },
  {
    slug:"portland-wedding-catering-guide",
    category:"Catering",
    title:"Portland Wedding Catering Guide: How to Compare Menus, Service Styles and the Real Scope of a Proposal",
    dek:"A detailed guide to choosing wedding catering by guest experience, service style, staffing, dietary needs, rentals and the details hidden behind a per-person price.",
    readTime:"13 min read",
    seoTitle:"Portland Wedding Catering Guide: Costs, Menus & Service",
    seoDescription:"Compare Portland wedding catering by menu, service style, staffing, dietary needs, rentals and proposal details before choosing a caterer.",
    relatedSlugs:["portland-wedding-budget-guide","how-to-choose-portland-wedding-vendors","best-portland-wedding-venues-guide"],
    sections:[
      {heading:"Begin with the kind of dinner you want guests to experience",paragraphs:["Food is only one part of catering. The service format affects pacing, staffing, room layout and how guests move through the reception. Start by deciding whether dinner should feel formal, communal, relaxed or fast-moving, then compare caterers that execute that style well.","Your venue matters too. Kitchen access, load-in routes, power, water, trash requirements and rental needs can change what is practical."]},
      {heading:"Understand the tradeoffs between common service styles",paragraphs:["Plated meals can create a polished, structured dinner but usually require significant staffing and careful meal tracking. Buffets can offer variety and flexibility but need enough space and a plan to prevent long lines. Family-style service can feel warm and communal while requiring table space for serving dishes."],bullets:["Plated: structured service and individual courses","Buffet: flexible selection and guest movement","Family style: shared dishes at each table","Stations: multiple food experiences around the room","Cocktail style: smaller plates with more movement and seating flexibility"]},
      {heading:"A per-person price rarely tells the whole story",paragraphs:["When comparing proposals, identify what sits outside the food price. Staffing, service charge, rentals, china, glassware, linens, delivery, cake cutting, coffee service, travel and gratuity policies can materially change the total.","Ask for an estimated all-in proposal based on your current guest count and venue whenever possible. That makes comparisons more meaningful than looking at menu prices alone."]},
      {heading:"Plan dietary needs early enough to make them part of the menu",paragraphs:["Ask guests about dietary restrictions during the RSVP process and discuss the caterer's approach before finalizing the menu. The goal is not simply to have something available; guests with restrictions should understand what they can eat and service staff should know how those meals are handled.","If allergies are severe, ask specifically about preparation practices and cross-contact rather than assuming a menu label represents an allergy-safe environment."]},
      {heading:"The tasting should answer operational questions too",paragraphs:["Use a tasting to discuss portioning, presentation, substitutions, seasonality and service—not only whether you like the dish. Ask what will be different when the kitchen is producing the meal for your actual guest count at your venue."]},
      {heading:"Choose the caterer who can execute the whole service",paragraphs:["Great food matters, but so do communication, staffing, timing and coordination with the venue and planner. A strong catering team understands how cocktail hour, dinner, speeches, dessert and bar service fit into the larger reception timeline."]}
    ],
    checklist:["Choose a preferred service style","Confirm venue kitchen and catering requirements","Compare estimated all-in proposals","Ask what rentals and staffing are included","Plan dietary information with RSVPs","Discuss service charges and gratuity policy","Use the tasting to confirm logistics as well as flavor"],
    faq:[
      {question:"Which wedding catering style is best?",answer:"There is no single best style. Plated, buffet, family-style, stations and cocktail-style service create different guest experiences and staffing needs. Choose based on your venue, priorities and reception flow."},
      {question:"What should you compare in catering proposals?",answer:"Compare the menu plus staffing, rentals, delivery, service charges, beverage or coffee service, setup, cleanup and any venue-specific costs so you are evaluating a similar scope."},
      {question:"When should guests provide dietary restrictions?",answer:"Collect dietary information with enough time to send final counts and needs to the caterer by the deadline in your agreement."}
    ]
  },
  {
    slug:"how-to-choose-portland-wedding-dj",
    category:"DJs",
    title:"How to Choose a Portland Wedding DJ Who Can Read the Room, Run the Timeline and Keep the Party Moving",
    dek:"Go beyond the playlist and compare wedding DJs by MC style, sound, planning process, backup equipment, ceremony support and their ability to manage a reception.",
    readTime:"11 min read",
    seoTitle:"How to Choose a Portland Wedding DJ: Complete Guide",
    seoDescription:"Learn how to compare Portland wedding DJs by MC style, planning process, sound, ceremony support, backup equipment and reception experience.",
    relatedSlugs:["how-to-choose-portland-wedding-vendors","portland-wedding-planning-checklist","best-portland-wedding-venues-guide"],
    sections:[
      {heading:"A wedding DJ is managing energy as much as music",paragraphs:["The playlist matters, but a wedding DJ also works with the planner or coordinator to move guests through introductions, dinner, speeches, formal dances and open dancing. The best fit understands the atmosphere you want and does not make the reception feel like someone else's template.","Ask how the DJ reads a room when the planned song sequence is not working. Their answer can tell you more than a sample playlist."]},
      {heading:"Decide how much MC presence you want",paragraphs:["Some couples want an energetic host who interacts frequently with guests. Others want concise announcements and almost no microphone presence beyond what the timeline requires. Neither approach is universally better.","Describe what would feel natural—and what would make you uncomfortable—so you can compare the DJ's normal style with your expectations."]},
      {heading:"Ask how music planning actually works",paragraphs:["A useful planning process should capture must-plays, do-not-plays, special songs, genres you enjoy and the preferences of the crowd without requiring you to program every minute yourself.","Talk about explicit lyrics, guest requests and how much flexibility the DJ has to change direction during dancing."],bullets:["Must-play songs","Do-not-play songs","Formal dance selections","Guest-request policy","Preferred genres and eras","Songs or styles that represent your families or cultures"]},
      {heading:"Ceremony and reception audio may be separate jobs",paragraphs:["If the DJ is providing ceremony sound, confirm microphones, speaker placement, music cues and whether the ceremony location needs a separate system. Outdoor ceremonies can require different equipment and power planning than an indoor reception.","Also ask whether cocktail hour uses a separate speaker setup so music can continue while the main reception system is being prepared."]},
      {heading:"Professional backup plans matter",paragraphs:["Ask what happens if a laptop, mixer, speaker or microphone fails and what the company does if the assigned DJ becomes unavailable. You do not need to understand every piece of equipment; you do want to know that a realistic backup process exists."]},
      {heading:"Look for someone who fits your wedding, not the loudest sales pitch",paragraphs:["Strong DJs can explain their approach without promising that every dance floor will look the same. Your guest mix, timeline, venue and preferences all influence the reception.","Choose the professional whose communication, planning process, music knowledge and MC approach make you confident they can adapt while keeping the celebration feeling like yours."]}
    ],
    checklist:["Define the MC style you prefer","Discuss must-play and do-not-play music","Ask how guest requests are handled","Confirm ceremony and cocktail-hour audio needs","Ask about backup equipment and personnel","Review reception timeline responsibilities","Confirm setup, teardown and overtime terms"],
    faq:[
      {question:"What should you ask a wedding DJ before booking?",answer:"Ask about MC style, music planning, guest requests, ceremony sound, backup equipment, timeline coordination, setup requirements and who will personally perform at your wedding."},
      {question:"Can a wedding DJ provide ceremony sound?",answer:"Many can, but services vary. Confirm microphones, speakers, music cues, power needs and whether a separate ceremony system is included."},
      {question:"Should couples give their DJ a complete playlist?",answer:"Usually you can provide priorities, must-plays and do-not-plays while leaving room for the DJ to respond to the crowd. Discuss the level of control you want during planning."}
    ]
  }
,
  {
    slug:"portland-bridal-hair-makeup-guide",
    category:"Hair & Makeup",
    title:"Portland Bridal Hair & Makeup Guide: Trials, Timing and Choosing the Right Beauty Team",
    dek:"Plan wedding hair and makeup around your style, wedding-morning timeline, party size, trials and the practical details that keep the morning calm.",
    readTime:"12 min read",
    seoTitle:"Portland Bridal Hair & Makeup Guide: Trials, Costs & Timing",
    seoDescription:"Plan Portland wedding hair and makeup with guidance on choosing artists, trials, timing, party size, touch-ups and wedding-morning logistics.",
    relatedSlugs:["portland-wedding-planning-checklist","wedding-planner-vs-coordinator-portland","how-to-choose-portland-wedding-vendors"],
    sections:[
      {heading:"Choose the artist by the work you actually want to wear",paragraphs:["Start with portfolios that repeatedly show the type of hair or makeup you are drawn to. Look beyond one dramatic transformation and pay attention to skin texture, hair texture, different ages and how the finished work photographs.","Bring references to consultations, but describe what you like about them: soft skin, defined eyes, polished waves, natural texture or a particular silhouette. That gives the artist more useful direction than asking for an exact copy of someone else's look."]},
      {heading:"A trial is a working session, not just a preview",paragraphs:["Use the trial to test both the look and the communication process. Wear the style for several hours if possible and notice comfort, durability and whether it still feels like you.","Photograph the result in different light. If you want changes, be specific about them so the wedding-day notes reflect the final direction rather than the first attempt."]},
      {heading:"Build the morning timeline backward from when everyone must be finished",paragraphs:["Hair and makeup schedules depend on the number of services, number of artists and complexity of the looks. Add buffer before dressing, portraits or travel rather than scheduling the final service to end at the exact moment you need to leave.","If several people are receiving services, ask the beauty team to help build the order. Some teams may recommend adding artists rather than beginning extremely early."],bullets:["Number of hair services","Number of makeup services","Artist and assistant count","Getting-ready location access","Photography start time","First look or pre-ceremony portraits","Travel time to the ceremony"]},
      {heading:"Think about Portland weather without fighting your natural texture",paragraphs:["Rain, wind, heat and humidity can affect hair and makeup, especially when portraits or ceremonies are outdoors. Ask how the artist would prepare your specific hair and skin for the conditions expected around your date.","A weather-aware plan can include product choices, hairstyle adjustments, blotting or touch-up supplies without requiring you to abandon the look you love."]},
      {heading:"Clarify travel, minimums and additional services",paragraphs:["Before booking, understand minimum service requirements, travel charges, early-start fees, parking, assistant fees and whether lashes, extensions, touch-up kits or on-site touch-ups are included.","If your getting-ready location changes later, tell the team early because travel time and setup conditions can affect the schedule."]},
      {heading:"The right team should make the morning easier",paragraphs:["Skill matters, but so does temperament. Your beauty team is present during an emotionally busy part of the day. Clear communication, punctuality and a calm process can be as valuable as the finished look."]}
    ],
    checklist:["Save examples of the hair and makeup style you actually want","Confirm who will personally provide each service","Schedule and photograph your trial","Count every requested hair and makeup service","Build buffer into the morning timeline","Discuss weather and touch-up needs","Confirm travel, minimums and early-start policies"],
    faq:[
      {question:"Do you need a wedding hair and makeup trial?",answer:"A trial is useful for testing the look, comfort, durability and communication with the artist before the wedding. Whether it is required depends on the provider."},
      {question:"How do you build a wedding hair and makeup timeline?",answer:"Count all services, confirm the number of artists and work backward from the time everyone must be finished, including buffer for dressing, portraits and travel."},
      {question:"Should wedding hair and makeup be finished before the photographer arrives?",answer:"Not necessarily. Many photographers document final beauty preparations, but the schedule should ensure the people needed for planned portraits are ready on time."}
    ]
  },
  {
    slug:"portland-wedding-cake-dessert-guide",
    category:"Cakes",
    title:"Portland Wedding Cake & Dessert Guide: Servings, Flavors, Display and the Questions to Ask",
    dek:"Plan wedding dessert around guest count, serving style, design, venue conditions and the kind of sweet ending you actually want your guests to enjoy.",
    readTime:"11 min read",
    seoTitle:"Portland Wedding Cake & Dessert Guide: Servings, Flavors & Planning",
    seoDescription:"Plan a Portland wedding cake or dessert table with guidance on servings, flavors, display, delivery, venue conditions and baker questions.",
    relatedSlugs:["portland-wedding-catering-guide","portland-wedding-budget-guide","best-portland-wedding-venues-guide"],
    sections:[
      {heading:"Start with how dessert will be served",paragraphs:["A traditional tiered cake, cutting cake with sheet cake, dessert table, cupcakes and individual sweets all create different serving and display needs. Decide whether dessert is a formal reception moment or something guests can explore over time.","Your caterer, planner and baker may share responsibility for cutting, plating, moving or replenishing desserts, so establish those roles before the wedding."]},
      {heading:"Guest count is the starting point, not always the exact serving count",paragraphs:["The amount you need depends on whether cake is the only dessert, whether other sweets are offered and how dessert is served. Ask the baker how they calculate portions for their cake sizes rather than relying on a generic diagram.","If you want multiple flavors, discuss whether they can be distributed predictably or whether guests will simply receive whichever flavor is being cut."]},
      {heading:"Design choices can affect both labor and structure",paragraphs:["Intricate piping, handmade sugar flowers, sculpted details, metallic finishes and unusual shapes can require significant production time. Fresh flowers may require coordination between the baker and florist.","Bring visual references, but identify the elements you love—texture, shape, color, simplicity or floral treatment—so the baker can design something appropriate for your serving needs and budget."]},
      {heading:"Venue conditions matter more than couples expect",paragraphs:["Heat, direct sun, uneven outdoor surfaces, refrigeration and the amount of time a cake sits on display can influence design and setup. Tell the baker where the dessert will be displayed and whether the reception is outdoors.","Confirm delivery timing and who is responsible for moving the cake if weather or room plans change."]},
      {heading:"A tasting should help narrow the menu",paragraphs:["Use tastings to compare flavor combinations and discuss which fillings or finishes work well with the design and season. Consider offering contrast rather than choosing several flavors that taste very similar.","If dietary alternatives are important, ask how those items are prepared, packaged and identified, especially when allergies are involved."]},
      {heading:"Plan the cake-cutting moment with the larger reception",paragraphs:["Coordinate timing with the planner, photographer, DJ and catering team. If you want photographs of the cake before guests begin eating dessert, make sure everyone knows when cutting and service will happen."]}
    ],
    checklist:["Choose the dessert service style","Estimate servings with your baker","Discuss design labor and structural needs","Confirm venue temperature and display conditions","Assign cake cutting and plating responsibility","Coordinate fresh flowers if used","Put cake cutting into the reception timeline"],
    faq:[
      {question:"Do you need wedding cake for every guest?",answer:"Not always. The appropriate number of servings depends on the dessert format, other sweets being served and how the baker portions the cake."},
      {question:"Who cuts the wedding cake?",answer:"It varies by venue and vendor team. Ask whether the caterer, venue or another professional provides cake cutting and whether a fee applies."},
      {question:"Can a wedding cake be displayed outside?",answer:"Sometimes, but temperature, sun, wind and the cake's construction matter. Discuss the exact setting with the baker before planning an outdoor display."}
    ]
  },
  {
    slug:"portland-wedding-rentals-guide",
    category:"Rentals",
    title:"Portland Wedding Rentals Guide: What You Need, What You Don’t and What Your Venue Already Includes",
    dek:"A practical guide to wedding tables, chairs, linens, tabletop pieces, lighting, tents and décor rentals—and how to avoid ordering before you understand the venue.",
    readTime:"12 min read",
    seoTitle:"Portland Wedding Rentals Guide: Tables, Chairs, Linens & Decor",
    seoDescription:"Plan Portland wedding rentals by comparing venue inclusions, tables, chairs, linens, tabletop pieces, lighting, delivery and setup needs.",
    relatedSlugs:["best-portland-wedding-venues-guide","portland-wedding-budget-guide","wedding-planner-vs-coordinator-portland"],
    sections:[
      {heading:"Inventory the venue before creating a rental wish list",paragraphs:["The fastest way to overspend on rentals is to shop before you know what the venue provides. Ask for an inventory with quantities, sizes, colors and condition rather than relying on a phrase such as tables and chairs included.","Also confirm whether included items can be used in every part of the property and who moves them between ceremony and reception spaces."]},
      {heading:"Separate functional rentals from design rentals",paragraphs:["Functional rentals are things the event needs to operate: tables, chairs, linens, glassware, flatware, plates, service equipment or a tent. Design rentals are chosen primarily to shape the look or guest experience: specialty chairs, lounge furniture, upgraded linens, statement bars or decorative pieces.","Knowing which problem each rental solves makes it easier to decide where an upgrade is worth the money."]},
      {heading:"Build quantities from the floor plan",paragraphs:["Guest count alone does not tell you how many tables you need. Table shape and size, seating layout, wedding party arrangements, buffet or station placement and accessibility all affect quantities.","Create or obtain a floor plan before finalizing the order, then include non-dining needs such as cake tables, welcome tables, DJ tables or ceremony chairs if they are not provided."],bullets:["Guest dining tables and chairs","Ceremony seating","Cocktail tables","Bars and back bars","Buffet or food-station tables","Cake and dessert tables","Welcome and guest-book tables","Lounge or specialty furniture"]},
      {heading:"Delivery and setup can be a major part of the rental plan",paragraphs:["Ask about delivery windows, pickup timing, minimum orders, stairs, elevators, long carries and after-hours pickup. A venue with a narrow setup window may require more staffing or a different delivery arrangement.","Clarify which items the rental company sets up and which are simply delivered in stacks or crates for another vendor to place."]},
      {heading:"Outdoor weddings need a weather decision process",paragraphs:["Tents, heaters, umbrellas, flooring or sidewalls may require reservations before the forecast is reliable. Ask vendors and the venue when weather-related decisions must be made and whether backup inventory can be held.","Do not assume a tent solves every weather issue. Wind, ground conditions, power, lighting, permits and installation access can all matter."]},
      {heading:"Edit the rental plan after the design comes together",paragraphs:["Once the venue, florist, caterer and planner have clarified their needs, review the rental order again. Remove duplicates, confirm final quantities and protect the upgrades that have the greatest visual or functional impact."]}
    ],
    checklist:["Get a detailed venue inventory","Separate must-have rentals from design upgrades","Build quantities from a floor plan","Confirm caterer tabletop and service needs","Understand delivery and pickup windows","Clarify who sets up each item","Create an outdoor weather decision plan"],
    faq:[
      {question:"What wedding rentals do most venues include?",answer:"Inclusions vary widely. Some venues provide tables and chairs while others include linens, tabletop items or very little. Request an itemized inventory from your venue."},
      {question:"Who sets up wedding rentals?",answer:"It depends on the contract. Rental companies may deliver only, provide setup for certain pieces or offer setup as an added service. Venues, caterers and planners also have different responsibilities."},
      {question:"When should rental quantities be finalized?",answer:"Final timing varies by company, but quantities are most reliable after the floor plan, guest count and catering needs are clearer. Follow the deadlines in your rental agreement."}
    ]
  }
,
  {
    slug:"oregon-wedding-officiant-ceremony-guide",
    category:"Officiants",
    title:"Oregon Wedding Officiant & Ceremony Guide: How to Create a Ceremony That Feels Like You",
    dek:"Choose an officiant, shape the ceremony, plan vows and understand the practical questions that deserve attention before the wedding day.",
    readTime:"11 min read",
    seoTitle:"Oregon Wedding Officiant Guide: Ceremony, Vows & Planning",
    seoDescription:"Choose an Oregon wedding officiant and plan a personal ceremony with guidance on vows, ceremony structure, rehearsal, audio and practical details.",
    relatedSlugs:["portland-wedding-planning-checklist","wedding-planner-vs-coordinator-portland","how-to-choose-portland-wedding-vendors"],
    sections:[
      {heading:"Choose an officiant whose presence fits the ceremony",paragraphs:["An officiant does more than read a script. They set the tone, guide guests through the ceremony and help the couple feel grounded in a moment that can move very quickly.","Think about whether you want the ceremony to feel warm and conversational, traditional, spiritual, secular, humorous, concise or story-driven. Ask prospective officiants how they learn about a couple and how much of the ceremony is customized."]},
      {heading:"Understand what the planning process includes",paragraphs:["Some officiants provide questionnaires, planning meetings, sample readings and vow guidance. Others work from a more established ceremony structure. Neither approach is automatically better, but you should know how much collaboration to expect.","Ask when the ceremony draft is created, whether you can review it, how changes are handled and what information the officiant needs from you."]},
      {heading:"Build a ceremony with a clear beginning, middle and ending",paragraphs:["Most ceremonies include an entrance, welcome, words about marriage or the couple, vows, ring exchange, pronouncement and recessional, but the structure can be adapted. Readings, cultural traditions, music or participation from loved ones can add meaning when they have a real reason to be there."],bullets:["Processional and entrance","Welcome and opening remarks","Story, reflection or reading","Vows","Ring exchange","Optional ritual or tradition","Pronouncement","Recessional"]},
      {heading:"Decide how you want to handle vows",paragraphs:["Personal vows can be written independently, created with prompts or spoken privately while traditional vows are used during the ceremony. Agree on approximate length and tone so one person does not arrive with three sentences while the other brings three pages.","If you are nervous about reading, print vows clearly or use vow books rather than relying on a phone screen."]},
      {heading:"Rehearse logistics even if you do not rehearse every word",paragraphs:["The rehearsal is useful for entrances, standing positions, handoffs, microphones, rings and the recessional. The ceremony usually feels more natural when people know where to go without rehearsing the emotion out of it.","Coordinate the officiant's needs with the planner or coordinator and whoever is responsible for ceremony audio."]},
      {heading:"Confirm Oregon legal requirements from an official source",paragraphs:["Marriage-license procedures and legal requirements can change and can depend on jurisdiction. Before the wedding, verify the current requirements with the appropriate Oregon county or state source rather than relying on an old planning article.","Your officiant should also understand their responsibilities for completing and returning the marriage documents, but the couple should know the process too."]}
    ],
    checklist:["Choose the ceremony tone you want","Ask how the officiant customizes ceremonies","Decide how vows will work","Confirm readings and traditions","Plan microphones and ceremony audio","Rehearse entrances and positions","Verify current marriage-license requirements with the appropriate government source"],
    faq:[
      {question:"How long should a wedding ceremony be?",answer:"There is no required length. The right duration depends on your traditions, readings, vows and ceremony style. Prioritize meaning and pacing rather than aiming for a universal number."},
      {question:"Do you need a wedding rehearsal?",answer:"A rehearsal can be especially useful for larger wedding parties, complicated entrances or unfamiliar ceremony spaces. Even a brief logistics rehearsal can clarify positions, cues and the recessional."},
      {question:"Can a friend officiate a wedding in Oregon?",answer:"Rules and documentation requirements should be verified with the relevant Oregon government source before relying on a friend or family member to officiate."}
    ]
  },
  {
    slug:"portland-wedding-transportation-guide",
    category:"Transportation",
    title:"Portland Wedding Transportation Guide: Shuttles, Guest Logistics and Building a Timeline That Works",
    dek:"Figure out whether you need wedding transportation, who actually needs a ride and how hotels, parking, multiple venues and the reception timeline affect the plan.",
    readTime:"12 min read",
    seoTitle:"Portland Wedding Transportation Guide: Shuttles & Guest Logistics",
    seoDescription:"Plan Portland wedding transportation with guidance on shuttles, hotels, parking, multiple venues, guest timing, pickup windows and vendor questions.",
    relatedSlugs:["best-portland-wedding-venues-guide","portland-wedding-planning-checklist","wedding-planner-vs-coordinator-portland"],
    sections:[
      {heading:"Start by identifying the transportation problem",paragraphs:["Not every wedding needs professional transportation. The need usually comes from a specific logistical issue: limited parking, a remote venue, separate ceremony and reception locations, a large hotel block, guests unfamiliar with the area or a plan that involves alcohol and a difficult return trip.","Map the guest journey before shopping for vehicles. You may discover that only one portion of the day needs transportation."]},
      {heading:"Decide who actually needs a seat",paragraphs:["Transportation for the couple and wedding party is different from guest transportation. Build separate counts for each group and do not assume every hotel guest will use a shuttle.","If guest transportation is optional, communicate departure times clearly and consider how you will estimate ridership before final vehicle counts are due."]},
      {heading:"Build the schedule around loading, not just drive time",paragraphs:["A twenty-minute drive does not create a twenty-minute transportation block. Guests need time to gather, board, unload and walk from the drop-off point. Traffic, event congestion and venue access can add uncertainty.","Ask the transportation company how much loading time they recommend for the vehicle and passenger count you are considering."],bullets:["Hotel pickup window","Boarding time","Drive time with realistic traffic","Venue unloading location","Walking time to ceremony seating","Return-trip waves","Final departure after the reception"]},
      {heading:"One shuttle may be able to make multiple loops",paragraphs:["For shorter routes, one vehicle can sometimes make several trips instead of moving every guest at once. That can change cost and capacity needs, but only if the timeline leaves enough margin.","Work through the loop timing with the company rather than assuming the same vehicle can be in two places at nearly the same time."]},
      {heading:"Late-night transportation deserves as much planning as arrival",paragraphs:["Guests do not always leave a reception at the same time. Consider whether you need an early return, a main departure and a final departure, especially when the venue is far from hotels or rideshare availability may be limited.","Make departure information visible at the reception so guests are not relying on a message they received weeks earlier."]},
      {heading:"Confirm the details vehicles need before wedding day",paragraphs:["Provide exact addresses, venue access instructions, contact names and a final schedule. Ask about vehicle size restrictions, parking or staging requirements, overtime, gratuity policies and what happens if a vehicle has a mechanical issue.","A transportation plan is successful when guests barely have to think about it."]}
    ],
    checklist:["Map every location guests may travel between","Separate wedding-party and guest transportation needs","Estimate realistic ridership","Add loading and unloading time","Plan return-trip waves","Confirm vehicle access with the venue","Share a final transportation schedule with the vendor team"],
    faq:[
      {question:"Does every wedding need guest transportation?",answer:"No. Transportation is most useful when it solves a specific issue such as limited parking, remote venues, separate locations or moving a large group from hotels."},
      {question:"How many wedding shuttles do you need?",answer:"It depends on passenger count, vehicle capacity, route length and whether vehicles can make multiple loops. A transportation provider can model the schedule around those details."},
      {question:"Should you provide transportation back to the hotel?",answer:"If you provide arrival transportation, plan the return carefully too. Multiple departure times may work better than a single end-of-night trip."}
    ]
  },
  {
    slug:"wedding-invitation-stationery-timeline-guide",
    category:"Stationery",
    title:"Wedding Invitation & Stationery Timeline: What to Send, When to Send It and What Couples Forget",
    dek:"Organize save-the-dates, invitations, RSVPs and wedding-day stationery around one practical timeline without ordering pieces you do not need.",
    readTime:"12 min read",
    seoTitle:"Wedding Invitation Timeline: Save-the-Dates, RSVPs & Stationery",
    seoDescription:"Build a wedding invitation and stationery timeline covering save-the-dates, invitations, RSVPs, menus, programs, place cards and day-of pieces.",
    relatedSlugs:["portland-wedding-planning-checklist","portland-wedding-budget-guide","how-to-choose-portland-wedding-vendors"],
    sections:[
      {heading:"Think of stationery as a communication system",paragraphs:["Wedding stationery is not only paper. It tells guests where to go, when to respond, what to wear and what to expect. Start by listing the information guests need at each stage, then decide which pieces should be printed and which can live on the wedding website.","That approach can reduce clutter and keep the visual design consistent across the pieces you actually need."]},
      {heading:"Save-the-dates give guests the planning signal",paragraphs:["Save-the-dates are especially useful when many guests will travel, the wedding falls during a busy season or accommodations should be reserved early. Before sending them, make sure the date and location information you publish is firm.","If the wedding website is ready, including it can give guests one place to find travel information as plans develop."]},
      {heading:"Invitations need enough time for both guests and your vendor deadlines",paragraphs:["Work backward from the date your caterer, venue or planner needs the final guest count. Your RSVP deadline should leave time to follow up with missing responses and organize meal choices or seating before those vendor deadlines.","Ask your stationer about production and mailing time before deciding when invitations must be ordered."]},
      {heading:"Day-of stationery should follow the final plan",paragraphs:["Menus, escort cards, place cards, programs, bar signs, table numbers and welcome signs are often ordered later because names, meal selections and timeline details can change.","Do not finalize personalized pieces until the information they depend on is stable."],bullets:["Ceremony programs","Welcome and directional signs","Escort cards or seating chart","Place cards","Table numbers","Menus","Bar and signature-drink signs","Guest-book or favor signage"]},
      {heading:"Proof every factual detail separately from the design",paragraphs:["A beautiful invitation can still create problems if the date, time, address or website is wrong. Proof names, numbers, addresses and URLs deliberately. Ask another person to review the final proof because familiarity makes errors easier to miss.","For mailed pieces, confirm postage requirements after you know the finished size, weight and shape rather than assuming a standard stamp will apply."]},
      {heading:"Build in a small quantity cushion",paragraphs:["Extra invitations can cover late additions, damaged envelopes and keepsakes. For day-of pieces, a small buffer can help with last-minute seating changes, depending on the format.","Ask the stationer when reprints become expensive or impractical so you can decide how much cushion makes sense."]}
    ],
    checklist:["List the information guests need at each stage","Confirm date and location before save-the-dates","Work backward from final guest-count deadlines","Allow production and mailing time","Delay personalized day-of pieces until details are stable","Proof every date, address, name and URL","Check finished postage requirements"],
    faq:[
      {question:"When should wedding invitations be sent?",answer:"Timing depends on your wedding, guest travel needs and RSVP deadlines. Work backward from the final guest-count deadline and allow time to follow up with guests who do not respond."},
      {question:"Do you need both escort cards and place cards?",answer:"Not always. Escort cards or a seating chart direct guests to a table; place cards identify an assigned seat. You only need both when your seating plan uses both levels of assignment."},
      {question:"What wedding stationery is optional?",answer:"Programs, menus, individual place cards and many signs can be optional depending on how your event communicates the same information. Choose pieces that solve a real guest need or add meaningful design value."}
    ]
  },
  {
    slug:"portland-wedding-videographer-guide",category:"Videography",title:"Portland Wedding Videography Guide: Coverage, Audio, Style and the Film You’ll Actually Rewatch",dek:"A practical guide to comparing Portland wedding videographers by storytelling style, coverage, audio, deliverables and the moments that matter after the day is over.",readTime:"12 min read",seoTitle:"Portland Wedding Videographer Guide: Coverage, Style & Audio",seoDescription:"Compare Portland wedding videographers by coverage, film style, audio, deliverables, timeline needs and questions to ask before booking.",relatedSlugs:["how-to-choose-portland-wedding-photographer","portland-wedding-planning-checklist","how-to-choose-portland-wedding-vendors"],sections:[
      {heading:"Decide what you want the film to preserve",paragraphs:["Wedding video can preserve voices, movement and atmosphere in a way still photography cannot. Start by deciding whether you care most about vows and speeches, a cinematic highlight, candid interactions, a documentary record or a combination.","Watch several complete examples from the same videographer rather than judging the work from a short social reel. Pay attention to pacing, audio and whether different weddings still feel like different couples."]},
      {heading:"Coverage hours should follow the story",paragraphs:["More hours are useful only when they cover moments you value. Work backward from the ceremony, speeches, dances and any late-night event you want captured, then decide how much getting-ready footage matters.","Photography and video teams also need room to work together. Ask how the videographer coordinates portraits, first looks and ceremony positions without slowing the day down."]},
      {heading:"Audio is one of the biggest differences between a clip and a wedding film",paragraphs:["Clear vows, officiant audio and speeches often become the emotional backbone of a film. Ask how ceremony and reception audio are recorded, what backup methods are used and whether venue or DJ feeds are part of the plan."]},
      {heading:"Understand exactly what is delivered",paragraphs:["A highlight film, teaser, ceremony edit, toast edit, documentary film and raw footage are different deliverables. Confirm approximate lengths, music approach, delivery method and revision policy before comparing prices."]},
      {heading:"Portland weather changes the visual plan",paragraphs:["Rain, wind, low winter light and bright summer evenings can all affect filming. A strong plan should include indoor options, realistic travel time and a willingness to use Portland weather as atmosphere rather than treating every cloud as a problem."]}
    ],checklist:["Watch multiple full wedding films","Compare audio quality as carefully as image quality","Confirm coverage hours and locations","Ask what films and raw footage are delivered","Discuss ceremony microphone strategy","Confirm turnaround and revision policy"],faq:[
      {question:"Do we need both a photographer and videographer?",answer:"They create different records of the day. Photography freezes individual moments; video can preserve movement, vows, speeches and sound. Whether both matter is a personal priority and budget decision."},
      {question:"Should our photographer and videographer know each other?",answer:"They do not need to have worked together before, but both should be comfortable coordinating timelines, portrait time and ceremony positions professionally."}
    ]
  },
  {
    slug:"portland-wedding-mobile-bar-guide",category:"Mobile Bars",title:"Portland Wedding Mobile Bar Guide: Drinks, Service, Logistics and the Questions to Ask",dek:"Plan a mobile wedding bar around guest experience, venue rules, staffing, drink scope, ice, glassware and the logistics couples often discover too late.",readTime:"12 min read",seoTitle:"Portland Wedding Mobile Bar Guide: Drinks, Staffing & Logistics",seoDescription:"Plan a Portland wedding mobile bar with guidance on service style, staffing, venue rules, mixers, ice, glassware and logistics.",relatedSlugs:["portland-wedding-catering-guide","best-portland-wedding-venues-guide","portland-wedding-budget-guide"],sections:[
      {heading:"Start with the experience, not the bar cart",paragraphs:["A beautiful mobile bar can be a design feature, but service is the real product. Decide whether you want a simple beer-and-wine station, cocktails, signature drinks, nonalcoholic options or a broader hosted-bar experience.","Then confirm what the provider actually supplies. Bartending labor, physical bar, mixers, garnishes, ice, cups or glassware, water stations and cleanup may be separate pieces."]},
      {heading:"Venue rules come before the menu",paragraphs:["Ask the venue what alcohol service is permitted, what insurance or licensing documentation it requires, where service can happen and whether there are restrictions on outside providers. Give those requirements to prospective bar vendors before booking."]},
      {heading:"Guest count affects more than beverage quantity",paragraphs:["The number of guests and the shape of the event influence staffing, service points, ice, glassware and how quickly a line can form. A complicated cocktail menu can also slow service compared with a deliberately edited menu."]},
      {heading:"Design a menu that still works at peak demand",paragraphs:["Signature cocktails can add personality, but they should be practical to execute repeatedly. Ask which drinks can be batched or simplified and build equally intentional nonalcoholic choices rather than treating them as an afterthought."]},
      {heading:"Plan the unglamorous logistics",paragraphs:["Water access, power, ice storage, trash, recycling, load-in, weather cover and end-of-night removal can determine whether a mobile setup works smoothly. Confirm responsibility for each before the final timeline."]}
    ],checklist:["Confirm venue alcohol requirements","Define what the bar vendor supplies","Discuss staffing and service points","Plan alcoholic and nonalcoholic choices","Confirm ice, water and glassware","Confirm load-in, weather cover and cleanup"],faq:[
      {question:"Does a mobile bar company always provide the alcohol?",answer:"Not necessarily. Service models vary, so confirm who purchases and transports beverages and what the venue permits before comparing proposals."},
      {question:"How many signature drinks should we offer?",answer:"There is no required number. A smaller menu can be easier to execute quickly; choose drinks because they add to the guest experience, not because a wedding is expected to have them."}
    ]
  },
  {
    slug:"portland-wedding-photo-booth-guide",category:"Photo Booths",title:"Portland Wedding Photo Booth Guide: How to Choose an Experience Guests Will Actually Use",dek:"Compare wedding photo booths by format, placement, attendant support, print and digital delivery, backdrop design and how the experience fits your reception.",readTime:"10 min read",seoTitle:"Portland Wedding Photo Booth Guide: Types, Setup & Questions",seoDescription:"Compare Portland wedding photo booths by format, backdrop, placement, prints, digital delivery, attendants and reception setup.",relatedSlugs:["how-to-choose-portland-wedding-dj","portland-wedding-rentals-guide","ways-to-make-your-portland-wedding-feel-more-personal"],sections:[
      {heading:"Choose the experience before the hardware",paragraphs:["Open-air booths, enclosed booths, portrait stations and roaming experiences can all work. The better question is what you want guests to do: make quick funny images, create polished portraits, leave a guest-book memory or share digital clips.","Look at complete event galleries to understand the result beyond the booth itself."]},
      {heading:"Placement can determine whether guests use it",paragraphs:["A booth hidden in a distant room can disappear from the reception experience. Look for a visible location near guest traffic that does not block dinner service, the dance floor or important venue circulation."]},
      {heading:"Ask what guests receive",paragraphs:["Printed strips, larger prints, GIFs, boomerangs, text delivery and online galleries create different experiences. Confirm whether downloads remain available after the wedding and whether the couple receives a complete gallery."]},
      {heading:"Backdrop and lighting should belong in the room",paragraphs:["Treat the booth as part of the visual design. Ask about footprint, lighting, backdrop dimensions and whether a custom design or venue wall can be used without creating clutter."]},
      {heading:"Attendant support matters when something goes wrong",paragraphs:["If the booth is staffed, ask what the attendant handles. If it is drop-off equipment, understand setup, troubleshooting and what happens if connectivity or printing fails."]}
    ],checklist:["Choose booth experience and output","Review full event galleries","Confirm footprint and placement","Confirm prints/digital delivery","Ask about attendant or troubleshooting support","Coordinate backdrop with room design"],faq:[
      {question:"When should a photo booth open?",answer:"It depends on the reception flow. Many couples choose a window that overlaps social time and dancing, but placement and guest behavior matter more than following a fixed schedule."},
      {question:"Do we need props?",answer:"No. Props can make the experience playful, while a clean portrait setup can feel more editorial. Match the booth style to the wedding rather than adding props automatically."}
    ]
  },
  {
    slug:"portland-wedding-content-creator-guide",category:"Content Creation",title:"Wedding Content Creators in Portland: What They Do, What They Don’t and Whether You Need One",dek:"Understand wedding-day content creation, how it differs from photography and videography, what deliverables to expect and how to keep another camera from taking over the day.",readTime:"11 min read",seoTitle:"Portland Wedding Content Creator Guide: What to Expect",seoDescription:"Learn what Portland wedding content creators do, how they differ from photographers and videographers, and what to ask before booking.",relatedSlugs:["how-to-choose-portland-wedding-photographer","portland-wedding-videographer-guide","how-to-choose-portland-wedding-vendors"],sections:[
      {heading:"Content creation solves a different problem",paragraphs:["A wedding content creator typically focuses on fast, phone-first vertical clips and behind-the-scenes moments rather than replacing the archival work of a photographer or filmmaker. The appeal is immediacy and a more casual point of view.","Decide whether that output matters to you before adding another person to the media team."]},
      {heading:"Define the deliverables clearly",paragraphs:["Ask whether you receive unedited clips, edited short-form videos, same-day posts, trend-based content or a mix. Confirm delivery timing, approximate volume and whether the creator posts anything publicly or simply sends files to you."]},
      {heading:"Protect the photography and video experience",paragraphs:["More cameras are not automatically better. Tell your photographer and videographer if a content creator will be present and ask how everyone will coordinate during the ceremony, portraits and major reception moments."]},
      {heading:"Choose a style that feels like you",paragraphs:["Some creators work quietly and document candidly; others direct transitions, trends and staged clips. Review complete wedding examples and decide how much direction you want during a day that is already heavily scheduled."]},
      {heading:"Think about privacy before instant sharing",paragraphs:["Fast delivery does not require immediate public posting. Discuss whether you want private files first, whether guests should appear in public content and whether there are moments you do not want shared."]}
    ],checklist:["Define why you want wedding-day content","Review full wedding examples","Confirm exact deliverables and turnaround","Coordinate with photographer and videographer","Discuss posting permissions and privacy","Set boundaries around staged content"],faq:[
      {question:"Does a wedding content creator replace a videographer?",answer:"Usually they serve different purposes. Content creation is commonly optimized for fast, social-friendly clips, while professional videography may focus on recorded audio, cinematic storytelling and longer-form films."},
      {question:"Do we have to post the content immediately?",answer:"No. You can hire someone for fast delivery without agreeing to real-time public posting. Set that expectation in advance."}
    ]
  },
  {
    slug:"portland-wedding-live-music-guide",category:"Live Entertainment",title:"Portland Wedding Live Music Guide: Ceremony Musicians, Cocktail Hour, Bands and Reception Energy",dek:"Use live music intentionally across the wedding day, from ceremony strings and cocktail-hour performers to full reception bands and specialty entertainment.",readTime:"12 min read",seoTitle:"Portland Wedding Live Music Guide: Bands & Ceremony Musicians",seoDescription:"Plan Portland wedding live music for the ceremony, cocktail hour or reception with guidance on sound, space, repertoire and logistics.",relatedSlugs:["how-to-choose-portland-wedding-dj","best-portland-wedding-venues-guide","portland-wedding-planning-checklist"],sections:[
      {heading:"Choose where live music will have the most impact",paragraphs:["You do not need live musicians for the entire day to create a memorable effect. A soloist during the ceremony, small ensemble at cocktail hour or band for the reception can each become a distinct part of the guest experience.","Start with the moment where live performance matters most to you, then build the scope around it."]},
      {heading:"Match the group to the room",paragraphs:["Stage footprint, electrical power, weather cover, acoustics and venue sound restrictions can shape what is possible. Ask the performer for technical requirements before assuming a particular ensemble will fit the space."]},
      {heading:"Repertoire is more than a song list",paragraphs:["Ask how requests work, whether special songs require new arrangements and how the group moves between genres or generations. For ceremony music, confirm cues and who will coordinate the processional timing."]},
      {heading:"Breaks and transitions need a plan",paragraphs:["Live performers may require breaks. Ask what music plays during those periods and who controls announcements or transitions so the energy does not suddenly disappear."]},
      {heading:"Outdoor Portland events need a weather answer",paragraphs:["Rain, temperature, wind and direct sun can affect instruments and electronics. Confirm the performer's weather requirements and make sure the backup location still has the necessary space and power."]}
    ],checklist:["Choose the moment live music matters most","Confirm stage or performance footprint","Review power and sound requirements","Discuss repertoire and special requests","Plan breaks and transition music","Confirm weather protection"],faq:[
      {question:"Can we have both a band and DJ?",answer:"Yes, if the roles and transitions are clear. Some weddings use live music for selected parts of the day and a DJ for other portions rather than asking one format to do everything."},
      {question:"Can musicians perform outdoors in the rain?",answer:"Do not assume so. Instruments and electrical equipment may require full weather protection. Ask each performer for their specific requirements and build those into the venue backup plan."}
    ]
  },
  {
    slug:"portland-wedding-hotel-block-guide",category:"Lodging",title:"Portland Wedding Hotel Block Guide: What Guests Need and What Couples Should Ask",dek:"Plan guest lodging around location, transportation, room-block terms and the information out-of-town guests actually need for a Portland wedding weekend.",readTime:"11 min read",seoTitle:"Portland Wedding Hotel Block Guide: Rooms, Guests & Logistics",seoDescription:"Plan a Portland wedding hotel block with guidance on location, room terms, transportation, guest communication and weekend logistics.",relatedSlugs:["portland-wedding-transportation-guide","best-portland-wedding-venues-guide","portland-wedding-planning-checklist"],sections:[
      {heading:"Choose the hotel around the guest journey",paragraphs:["The closest hotel is not always the most useful hotel. Consider airport access, venue transportation, walkable food and coffee, parking and whether guests will spend time together outside the wedding.","For a venue outside central Portland, compare staying near the venue with staying somewhere guests can enjoy the rest of the weekend."]},
      {heading:"Understand what the room block commits you to",paragraphs:["Ask whether the block is courtesy-based or carries a commitment, how rates can change, when unreserved rooms are released and what guests must do to receive the group rate.","Read the agreement rather than assuming every hotel block works the same way."]},
      {heading:"Estimate demand without promising every guest a room",paragraphs:["Start with households traveling from outside the area, then consider wedding party, close family and guests who may prefer not to drive after the reception. A block is a convenience, not necessarily a complete lodging census."]},
      {heading:"Transportation can make one hotel much more useful",paragraphs:["If you plan a shuttle, a concentrated pickup point can simplify transportation. Coordinate the lodging decision with the transportation plan before publishing guest instructions."]},
      {heading:"Give guests useful Portland context",paragraphs:["A wedding website can include neighborhood notes, airport and transit information, parking expectations and a few genuinely useful local recommendations. Keep the wedding-critical information easy to find."]}
    ],checklist:["Compare hotel location with venue and airport","Review room-block commitment and release date","Estimate traveling households","Coordinate shuttle pickup if applicable","Publish booking instructions clearly","Give guests concise Portland logistics"],faq:[
      {question:"Do we have to provide a hotel block?",answer:"No. It can be helpful when many guests are traveling, but some weddings are better served by a curated list of lodging options."},
      {question:"Should all guests stay at the same hotel?",answer:"Not necessarily. One primary option can simplify transportation, while additional options may better serve different budgets, neighborhoods or accessibility needs."}
    ]
  },
  {
    slug:"portland-wedding-dress-shopping-guide",category:"Bridal",title:"Portland Wedding Dress Shopping Guide: Timing, Fit, Alterations and Finding What Feels Like You",dek:"A practical Portland bridal shopping guide covering appointment timing, silhouettes, alterations, accessories and the decisions that matter beyond the fitting-room mirror.",readTime:"12 min read",seoTitle:"Portland Wedding Dress Shopping Guide: Timing & Alterations",seoDescription:"Plan Portland wedding dress shopping with guidance on appointment timing, fit, alterations, accessories, budgets and what to ask bridal shops.",relatedSlugs:["portland-wedding-planning-checklist","portland-bridal-hair-makeup-guide","how-to-build-a-wedding-budget-that-feels-realistic"],sections:[
      {heading:"Start with how you want to feel, not a silhouette rule",paragraphs:["Inspiration photos can help, but they should open possibilities rather than turn the appointment into a hunt for one exact dress. Bring a few references and describe the qualities you like—structure, movement, texture, simplicity, drama or softness.","Try enough variety to learn what feels right on your body and in motion. A dress has to work while walking, sitting, hugging and celebrating, not only while standing on a pedestal."]},
      {heading:"Shop with the full cost in mind",paragraphs:["The purchase price is only one part of the attire budget. Alterations, undergarments, veil or accessories, shoes, steaming and preservation can sit outside the original price.","Ask what is included before committing and leave room for the pieces that make the final look wearable."]},
      {heading:"Timing should leave room for alterations",paragraphs:["Ordering and alteration timelines vary by designer, shop and garment. Ask each bridal shop what timeline applies to the specific dress you are considering rather than relying on a universal wedding countdown.","If your wedding is closer, ask what samples, ready-to-wear options or expedited paths are realistically available."]},
      {heading:"Bring the right people to the appointment",paragraphs:["A small group that understands your taste can be more useful than a room full of competing opinions. Decide whose feedback helps you make decisions and whose presence might make it harder to hear your own reaction."]},
      {heading:"Think about the Portland setting",paragraphs:["Venue surfaces, season, temperature and rain plans can influence trains, hems, shoes and layers. You do not have to design the outfit around the weather, but the practical plan should acknowledge where you will actually wear it."]}
    ],checklist:["Set an attire budget beyond the dress price","Ask about ordering timeline","Ask what alterations are typical","Bring useful inspiration rather than one required look","Consider venue surfaces and season","Choose appointment guests intentionally"],faq:[
      {question:"How early should I shop for a wedding dress?",answer:"There is no single timeline that applies to every designer or shop. Ask prospective bridal stores about ordering and alteration lead times for the dresses you are considering, especially if your wedding is close."},
      {question:"Should I buy accessories at the same appointment?",answer:"Only if you are ready. Seeing a complete look can help, but you can also wait until the dress choice and alteration direction are settled."}
    ]
  },
  {
    slug:"portland-wedding-suit-tux-guide",category:"Formalwear",title:"Portland Wedding Suit & Tuxedo Guide: Fit, Rentals, Purchases and Coordinating the Wedding Party",dek:"Compare wedding suits and tuxedos by formality, fit, rental versus purchase, tailoring and the logistics of dressing a group without making everyone look identical.",readTime:"11 min read",seoTitle:"Portland Wedding Suit & Tuxedo Guide: Fit, Rentals & Timing",seoDescription:"Choose Portland wedding suits or tuxedos with guidance on fit, rental versus purchase, tailoring, wedding-party coordination and timing.",relatedSlugs:["portland-wedding-planning-checklist","ways-to-make-your-portland-wedding-feel-more-personal","how-to-build-a-wedding-budget-that-feels-realistic"],sections:[
      {heading:"Choose formality before choosing a color",paragraphs:["A tuxedo, traditional suit, relaxed tailoring and separates create different levels of formality. Start with the venue, time of day and overall wedding feeling, then choose fabrics and colors that belong in that setting.","Coordination does not require every person to wear the exact same thing. A shared palette, fabric or accessory can create cohesion while allowing better fit and personal comfort."]},
      {heading:"Rental versus purchase is a practical decision",paragraphs:["Renting can simplify a one-event look and group coordination. Purchasing can make sense when the garment will be worn again or when tailoring flexibility matters more.","Compare the complete package—shirt, shoes, accessories, alterations or damage policies—not just the advertised suit or tux price."]},
      {heading:"Fit changes the entire impression",paragraphs:["Shoulder fit, sleeve length, trouser break and jacket proportions can make a straightforward suit look polished. Build enough time for fitting, pickup and any adjustments rather than treating formalwear as a last-week task."]},
      {heading:"Group logistics deserve their own plan",paragraphs:["If wedding-party members live in different cities, ask how measurements, fittings, shipping, pickup and returns work. Give everyone one clear deadline and point of contact."]},
      {heading:"Portland weather can change fabric and footwear choices",paragraphs:["Warm summer afternoons, cool evenings and wet-season portraits can all influence comfort. Think about breathable layers, outerwear and shoes that can handle the actual venue surfaces."]}
    ],checklist:["Choose desired level of formality","Compare full rental and purchase packages","Schedule fitting and adjustment time","Plan out-of-town wedding-party logistics","Coordinate without requiring identical looks","Consider season and venue surfaces"],faq:[
      {question:"Do all wedding-party suits need to match?",answer:"No. Matching can create a uniform look, while coordinated colors or fabrics can create cohesion with more flexibility. Choose the approach that fits the wedding style."},
      {question:"Is buying always more expensive than renting?",answer:"Not necessarily. Compare the complete cost and whether the garment will be worn again rather than assuming one option is automatically cheaper."}
    ]
  },
  {
    slug:"portland-wedding-ring-jewelry-guide",category:"Jewelry",title:"Portland Wedding Rings & Jewelry Guide: Choosing Pieces You’ll Still Love After the Wedding",dek:"A practical guide to wedding bands and day-of jewelry, from comfort and metal choices to pairing rings, sizing, care and selecting pieces with meaning.",readTime:"11 min read",seoTitle:"Portland Wedding Rings & Jewelry Guide: Bands, Fit & Style",seoDescription:"Choose wedding bands and wedding-day jewelry with guidance on fit, metals, ring pairing, comfort, sizing, care and meaningful design.",relatedSlugs:["portland-wedding-planning-checklist","ways-to-make-your-portland-wedding-feel-more-personal","how-to-build-a-wedding-budget-that-feels-realistic"],sections:[
      {heading:"A wedding band has to work after the wedding",paragraphs:["The ring will live through ordinary days long after the ceremony. Think about comfort, work, hobbies, maintenance and how often you want to remove it—not only how it photographs next to an engagement ring.","Try different widths and profiles in person when possible. Small changes can feel surprisingly different on the hand."]},
      {heading:"Pairing rings can be intentional without being perfectly matched",paragraphs:["An engagement ring and band can sit flush, intentionally leave a gap or use a curved or contoured shape. Ask what will protect both pieces from rubbing and whether the combination affects future resizing or maintenance."]},
      {heading:"Metal choice includes lifestyle and care",paragraphs:["Color is only part of the decision. Ask the jeweler about durability, refinishing, resizing and care for the specific metal and construction you are considering.","If allergies or skin sensitivity are a concern, discuss material composition directly with the jeweler."]},
      {heading:"Day-of jewelry should support the whole look",paragraphs:["Earrings, necklaces, bracelets, watches and heirloom pieces can add meaning without all competing for attention. Try them with attire and hairstyle plans rather than choosing each piece in isolation."]},
      {heading:"Build meaning in ways that are actually personal",paragraphs:["Engraving, heirloom stones, custom design and locally made pieces can add a story, but meaning does not require customization. The best choice is one you understand and want to keep wearing."]}
    ],checklist:["Try different band widths and profiles","Ask how rings will sit together","Discuss metal care and resizing","Confirm sizing timeline","Try day-of jewelry with attire plans","Ask about warranties or service"],faq:[
      {question:"Do wedding bands have to match each other?",answer:"No. Some couples choose matching bands; others choose completely different designs based on individual taste and comfort."},
      {question:"Should my wedding band sit flush with my engagement ring?",answer:"Only if that is the look and construction you want. Some ring shapes naturally leave a gap or need a contour; a jeweler can explain the practical tradeoffs."}
    ]
  },
  {
    slug:"portland-rehearsal-dinner-welcome-party-guide",category:"Planning",title:"Portland Rehearsal Dinner & Welcome Party Guide: Planning the Night Before Without Creating a Second Wedding",dek:"Plan a rehearsal dinner or welcome party that helps people connect without doubling the complexity, décor and budget of the wedding itself.",readTime:"12 min read",seoTitle:"Portland Rehearsal Dinner & Welcome Party Guide",seoDescription:"Plan a Portland rehearsal dinner or welcome party with guidance on guest lists, venues, food, timing, transportation and keeping the event manageable.",relatedSlugs:["portland-wedding-planning-checklist","portland-wedding-catering-guide","portland-wedding-hotel-block-guide"],sections:[
      {heading:"Decide what the event is supposed to accomplish",paragraphs:["A rehearsal dinner can feed the ceremony group after rehearsal. A welcome party can give traveling guests a relaxed place to connect. Some weddings combine the two; others need only one.","Defining the purpose keeps the night from turning into a second full-scale reception."]},
      {heading:"Build the guest list around that purpose",paragraphs:["The ceremony group and immediate family may make sense for a rehearsal dinner, while a welcome event may include more travelers. There is no requirement to duplicate the wedding guest list.","Choose a format you can host comfortably rather than expanding because the boundary feels awkward."]},
      {heading:"Portland makes casual formats easy",paragraphs:["Restaurants, breweries, private dining rooms, patios and gathering spaces can create a strong Portland experience without a large décor build. Prioritize convenient food, conversation and a location guests can navigate easily."]},
      {heading:"Protect the wedding-day energy",paragraphs:["Set an ending time that gives the couple and wedding party room to rest. If the next morning starts early, a shorter event can be more generous than a late night."]},
      {heading:"Coordinate transportation and communication",paragraphs:["If many guests are staying together, consider walkability, rideshare access or a simple transportation plan. Put the time, address, attire guidance and invitation boundary clearly on the wedding website or invitation."]}
    ],checklist:["Define rehearsal dinner versus welcome-party purpose","Set the guest list intentionally","Choose a manageable food/service format","Publish clear event details","Consider hotel and transportation logistics","Set an ending time that protects wedding-day energy"],faq:[
      {question:"Do we need both a rehearsal dinner and welcome party?",answer:"No. Some weddings combine them, some host only a rehearsal dinner, and others skip a larger welcome event entirely."},
      {question:"Does everyone invited to the wedding need to attend the welcome party?",answer:"No. The guest list can reflect the purpose and budget of the event as long as invitations and communication are clear."}
    ]
  },
  {
    slug:"portland-wedding-after-party-guide",category:"Planning",title:"Portland Wedding After-Party Guide: When It’s Worth It and How to Keep It Easy",dek:"Decide whether your wedding needs an after-party and plan the location, food, transportation and guest communication without adding another complicated event.",readTime:"10 min read",seoTitle:"Portland Wedding After-Party Guide: Locations & Logistics",seoDescription:"Plan a Portland wedding after-party with practical guidance on timing, location, food, transportation, guest communication and whether you need one.",relatedSlugs:["how-to-choose-portland-wedding-dj","portland-wedding-transportation-guide","portland-rehearsal-dinner-welcome-party-guide"],sections:[
      {heading:"First ask whether the reception already gives you enough party",paragraphs:["An after-party is useful when venue hours end earlier than your group wants to stop, when a smaller circle wants to continue or when the reception format is intentionally restrained. It is not a required wedding event.","If the reception already runs late, adding another destination may create more transportation than fun."]},
      {heading:"Convenience usually beats spectacle",paragraphs:["A nearby bar, hotel lounge or simple private space can work better than a complicated second venue. Prioritize somewhere guests can reach safely and understand without another elaborate schedule."]},
      {heading:"Know who is actually invited",paragraphs:["You can invite everyone or keep the event informal, but communication should avoid making guests feel as though they accidentally missed part of the wedding. Decide whether it is an official hosted event or simply an optional place to continue the night."]},
      {heading:"Late-night food can do more than extra décor",paragraphs:["If people have been celebrating for hours, food and water may add more to the experience than another design moment. Confirm what the location can serve and whether outside food is permitted."]},
      {heading:"Transportation is part of the after-party",paragraphs:["Think through the route from reception to after-party and then back to hotels or homes. If transportation is already provided, decide whether it should extend to the later event."]}
    ],checklist:["Decide whether an after-party solves a real need","Choose a convenient location","Clarify whether it is hosted or informal","Plan late-night food and water","Communicate the plan simply","Think through the final ride home"],faq:[
      {question:"Do we need an after-party?",answer:"No. It is useful only if you want more time after the reception and have a practical way to continue."},
      {question:"Should we invite every wedding guest?",answer:"Not necessarily, but the invitation boundary and whether the event is officially hosted should be communicated clearly."}
    ]
  },
  {
    slug:"portland-wedding-guest-experience-guide",category:"Planning",title:"Portland Wedding Guest Experience Guide: The Details People Feel Even When They Don’t Notice Them",dek:"Improve the guest experience through arrival, comfort, timing, food, communication, accessibility and the small logistical choices that make a wedding feel thoughtful.",readTime:"13 min read",seoTitle:"Portland Wedding Guest Experience Guide: Comfort & Logistics",seoDescription:"Create a thoughtful Portland wedding guest experience with guidance on arrival, comfort, accessibility, timing, food, transportation and communication.",relatedSlugs:["portland-wedding-transportation-guide","portland-wedding-hotel-block-guide","best-portland-wedding-venues-guide"],sections:[
      {heading:"Guest experience starts before anyone arrives",paragraphs:["Clear information reduces friction. Give guests the address, start time, parking or transportation instructions, attire guidance and any weather information they genuinely need.","Put changing details in one reliable place rather than spreading them across messages, invitations and social posts."]},
      {heading:"Walk the arrival path like a guest",paragraphs:["Parking, shuttle drop-off, signs, stairs, long walks and unclear entrances can shape the first impression before guests see the ceremony. Visit the venue with that route in mind and account for people who move at different speeds."]},
      {heading:"Comfort is a design decision too",paragraphs:["Shade, heat, rain cover, seating, restrooms, drinking water and accessibility are not glamorous details, but they influence how long guests can relax and participate.","For outdoor Portland weddings, the backup plan should protect guest comfort as seriously as décor."]},
      {heading:"Transitions are where weddings often feel slow",paragraphs:["Long gaps, bar lines, room flips and transportation waits are more noticeable to guests than many decorative details. Ask what people will be doing during each transition and whether they have somewhere comfortable to go."]},
      {heading:"Personal touches work best when they are connected to you",paragraphs:["A favorite local snack, meaningful music, a thoughtful welcome note or a few Portland recommendations can feel personal without requiring favors at every seat. Choose gestures with a reason behind them."]}
    ],checklist:["Publish clear arrival information","Walk the guest arrival route","Plan weather comfort and accessibility","Review cocktail-hour and room-flip transitions","Check bar and restroom capacity","Provide a clear transportation plan","Choose personal touches with meaning"],faq:[
      {question:"What matters most to wedding guests?",answer:"There is no single universal priority, but clear information, reasonable comfort, food and drink access, and a day that moves without confusing gaps are practical foundations."},
      {question:"Do we need wedding favors for a good guest experience?",answer:"No. A favor is optional. Comfort, hospitality and clear logistics can have more impact than an item guests take home."}
    ]
  },
  {
    slug:"portland-wedding-honeymoon-planning-guide",category:"Honeymoons",title:"Honeymoon Planning Guide for Portland Couples: Budget, Timing and Building a Trip You Actually Want",dek:"Plan the honeymoon as its own experience, with practical decisions around budget, timing, travel style, documents and how much energy you will have after the wedding.",readTime:"12 min read",seoTitle:"Honeymoon Planning Guide for Portland Couples: Budget & Timing",seoDescription:"Plan a honeymoon with practical guidance on budget, timing, travel style, documents, booking priorities and deciding whether to leave right after the wedding.",relatedSlugs:["how-to-build-a-wedding-budget-that-feels-realistic","portland-wedding-planning-checklist","portland-wedding-after-party-guide"],sections:[
      {heading:"Plan the trip you want, not the honeymoon you think you should take",paragraphs:["A honeymoon can be a beach week, city trip, road trip, adventure or quiet few days close to home. Start with how you want to feel after the wedding and how much travel energy you realistically have.","Treat destination inspiration as a starting point rather than a requirement to make the trip bigger or farther away."]},
      {heading:"Give the honeymoon its own budget",paragraphs:["Flights, lodging, meals, local transportation, activities, travel insurance, documents and spending money can disappear inside the larger wedding budget. Separating the trip makes the tradeoffs easier to see.","If honeymoon contributions are part of a registry, plan the trip based on money you are comfortable committing rather than assuming gifts will cover a particular amount."]},
      {heading:"Leaving immediately is optional",paragraphs:["Some couples love moving directly from the wedding into travel. Others benefit from a day or week to sleep, return rentals, see family or simply decompress.","A delayed honeymoon can also open different travel dates without changing the wedding itself."]},
      {heading:"Check documents before the wedding gets busy",paragraphs:["Review identification, passport validity and destination entry requirements early enough to solve problems without adding them to the final wedding weeks. Use official government sources for current travel requirements."]},
      {heading:"Protect a little unplanned time",paragraphs:["A wedding already asks you to follow a detailed schedule. A honeymoon does not have to. Build the important reservations, then leave enough space to enjoy being somewhere together."]}
    ],checklist:["Choose travel style before destination","Set a separate honeymoon budget","Decide immediate versus delayed travel","Check passports and entry requirements","Plan airport or departure logistics","Leave room for unscheduled time"],faq:[
      {question:"Do we have to leave for the honeymoon right after the wedding?",answer:"No. An immediate trip and a delayed honeymoon are both valid; choose the timing that fits your energy, budget and travel plans."},
      {question:"Should the honeymoon be included in the wedding budget?",answer:"Track it somewhere intentionally. Keeping it as a separate category or separate budget can make wedding-versus-travel tradeoffs clearer."}
    ]
  },
  {
    slug:"portland-wedding-videography-photography-team-guide",category:"Videography",title:"Photographer + Videographer: How to Build a Wedding Media Team That Works Together",dek:"Coordinate photography and videography without turning the wedding into a production set, from timeline priorities and first looks to ceremony positions and portrait time.",readTime:"11 min read",seoTitle:"Wedding Photographer & Videographer Team Guide | Portland",seoDescription:"Coordinate your Portland wedding photographer and videographer with guidance on timelines, portraits, ceremony positions, audio and shared priorities.",relatedSlugs:["portland-wedding-videographer-guide","how-to-choose-portland-wedding-photographer","portland-wedding-planning-checklist"],sections:[
      {heading:"Hire for compatible working styles, not matching aesthetics",paragraphs:["Your photographer and filmmaker do not need identical visual styles. What matters operationally is that both can communicate, share limited time and respect the other team's need to capture important moments.","Ask each vendor how they normally coordinate when they have not worked with the other person before."]},
      {heading:"Give both teams the same timeline",paragraphs:["Separate versions create confusion. Share the current master timeline, addresses and major priorities with both teams and flag any moments where one needs additional setup time or audio preparation."]},
      {heading:"Portrait time belongs to both cameras",paragraphs:["Photography may need stillness and repetition while video benefits from movement and natural interaction. A good team can often create both without doubling portrait time when the priorities are discussed beforehand."]},
      {heading:"Ceremony positions deserve a conversation",paragraphs:["Aisles, fixed cameras, tripods and microphones can affect sight lines. Ask both teams how they plan ceremony coverage and whether venue restrictions change their approach."]},
      {heading:"Protect moments that should not feel produced",paragraphs:["Tell the team which parts of the day you want documented with minimal direction. More coverage should not automatically mean more interruptions."]}
    ],checklist:["Share one master timeline","Tell each vendor who else is on the media team","Discuss portrait priorities","Discuss ceremony positions and audio","Identify moments you want minimally directed","Confirm contact information before wedding week"],faq:[
      {question:"Do our photographer and videographer need to have worked together before?",answer:"No. Prior experience together can be convenient, but professional communication and a willingness to coordinate are more important."},
      {question:"Will having both make portraits take twice as long?",answer:"Not necessarily. Coordinated teams can often capture still and moving imagery within the same portrait windows when priorities are clear."}
    ]
  },
  {
    slug:"portland-wedding-rain-plan-guide",category:"Portland Guide",title:"The Portland Wedding Rain Plan: How to Make the Backup Feel Like Part of the Wedding",dek:"Build a Portland wedding weather backup that protects guests, photos and the experience without making the indoor plan feel like a disappointing Plan B.",readTime:"12 min read",seoTitle:"Portland Wedding Rain Plan: Ceremony, Photos & Guest Comfort",seoDescription:"Create a Portland wedding rain plan covering ceremony backup, guest comfort, photography, transportation, rentals and communication.",relatedSlugs:["portland-wedding-weather-and-season-guide","outdoor-wedding-venues-portland-guide","best-portland-wedding-venues-guide"],sections:[
      {heading:"Judge the backup space when you tour the venue",paragraphs:["If an outdoor ceremony matters to you, the indoor or covered alternative is part of the venue—not an emergency detail to inspect later. Look at capacity, sight lines, lighting, guest flow and how quickly the space can be changed.","Ask to see real examples of weddings held in the backup configuration."]},
      {heading:"Set a decision process before weather becomes emotional",paragraphs:["Clarify who makes the weather call, what information they use and when vendors need the decision. A defined process can prevent a stressful debate while chairs, florals and sound equipment are waiting to be placed."]},
      {heading:"Protect guest comfort first",paragraphs:["Covered walkways, umbrellas, heaters where appropriate, towels, flooring and clear directions may matter more than saving an outdoor décor plan. Think through arrival, ceremony, cocktail hour and transportation separately."]},
      {heading:"Rain does not automatically ruin photographs",paragraphs:["Talk with your photographer about covered portrait locations, indoor light and whether brief outdoor portraits are possible if conditions allow. Build flexibility rather than assuming every portrait must happen in one exact location."]},
      {heading:"Make both plans look intentional",paragraphs:["Choose ceremony décor and layouts that can move or translate when possible. If the backup has its own strengths, design toward them rather than trying to force the outdoor setup into a room that works differently."]}
    ],checklist:["Tour the real weather-backup space","Ask who makes the weather call","Confirm decision deadline","Plan covered guest arrival","Discuss rain portraits with photographer","Know what décor and audio can move","Communicate changes in one reliable place"],faq:[
      {question:"When should we decide to move a ceremony indoors?",answer:"That depends on the venue and vendors. Ask them for the operational deadline and decision process well before wedding week rather than inventing a universal cutoff."},
      {question:"Should we buy umbrellas for every guest?",answer:"Not automatically. First understand how far guests will actually be exposed, what the venue provides and whether covered arrival or transportation changes the need."}
    ]
  },
  {
    slug:"portland-wedding-parking-rideshare-guide",category:"Transportation",title:"Portland Wedding Parking & Rideshare Guide: Getting Guests In, Out and Home Without Confusion",dek:"Plan parking, rideshare, shuttle and drop-off information so guests understand how to arrive and leave a Portland wedding before they are standing at the curb.",readTime:"10 min read",seoTitle:"Portland Wedding Parking & Rideshare Guide",seoDescription:"Plan Portland wedding parking, rideshare, drop-off and guest transportation with practical guidance for venues, hotels and wedding websites.",relatedSlugs:["portland-wedding-transportation-guide","portland-wedding-guest-experience-guide","portland-wedding-hotel-block-guide"],sections:[
      {heading:"Do not write 'parking available' until you know what that means",paragraphs:["Ask how many spaces are available, whether they are shared, paid, reserved or accessible, and what happens when the primary lot fills. For urban venues, understand nearby garages or street-parking realities before giving guests instructions."]},
      {heading:"Find the actual rideshare pickup point",paragraphs:["The front door is not always a safe or permitted loading zone. Ask the venue where drivers normally meet guests and whether large events create congestion or access restrictions."]},
      {heading:"Arrival and departure are different problems",paragraphs:["Guests tend to arrive in a concentrated window but may leave across several hours. A transportation plan that works before the ceremony may need a different approach after the reception."]},
      {heading:"Make accessibility part of the route",paragraphs:["Distance, grade, stairs, gravel and weather can turn a technically available parking spot into a difficult arrival. Identify accessible drop-off and parking options and communicate them directly when needed."]},
      {heading:"Put the answer where guests will look",paragraphs:["Use the wedding website for the detailed instructions and keep day-of signage focused on the final turn, lot or pickup point. Avoid making guests search through old messages for transportation information."]}
    ],checklist:["Confirm real parking capacity","Identify overflow options","Find rideshare pickup/drop-off location","Plan accessible arrival","Separate arrival and departure needs","Publish clear instructions"],faq:[
      {question:"Should we provide transportation if parking is limited?",answer:"It can be one solution, but first define the actual parking gap, hotel concentration and guest needs. A shuttle, rideshare plan or different arrival strategy may solve different problems."},
      {question:"Can guests just use rideshare?",answer:"Possibly, but confirm the venue's pickup area and consider late-night demand, remote locations and whether guests will have reliable connectivity."}
    ]
  },
  {
    slug:"portland-wedding-flower-season-guide",category:"Florists",title:"Portland Wedding Flowers by Season: A Better Way to Think About What’s Available",dek:"Use season as inspiration for texture, color and locally available ingredients without turning a wedding floral plan into a rigid list of flowers that must be in bloom.",readTime:"11 min read",seoTitle:"Portland Wedding Flowers by Season: Oregon Floral Guide",seoDescription:"Explore Portland wedding flowers by season with guidance on availability, substitutions, color, texture and working flexibly with a florist.",relatedSlugs:["portland-wedding-flower-cost-guide","best-time-year-portland-wedding","portland-wedding-weather-and-season-guide"],sections:[
      {heading:"Season should shape the conversation, not dictate the recipe",paragraphs:["Flowers are sourced through different channels and exact availability changes. Instead of assuming a particular variety will be local or available on a date, use season to talk about feeling, texture and color with your florist.","Give the designer permission to substitute when a flower does not arrive in the quality expected."]},
      {heading:"Spring can lean into movement and freshness",paragraphs:["Spring inspiration often works well with softer shapes, branching elements and garden textures. Oregon's changing spring weather also makes flexibility valuable when locally grown ingredients shift week to week."]},
      {heading:"Summer gives designers a broad visual vocabulary",paragraphs:["Longer days and outdoor weddings can support saturated color, airy garden arrangements or restrained palettes. Consider how flowers will handle direct sun and where arrangements will sit before the ceremony or reception begins."]},
      {heading:"Fall does not have to mean orange",paragraphs:["Autumn can be expressed through berries, grasses, foliage, deeper neutrals, fruit, branches or texture rather than a literal seasonal palette. Use the landscape as inspiration without feeling obligated to theme the wedding."]},
      {heading:"Winter rewards structure, foliage and a flexible ingredient list",paragraphs:["Winter designs can use evergreens, branches, textural foliage, candles and imported flowers in many styles. Ask the florist what is dependable around your date and design around the overall composition rather than one fragile must-have bloom."]}
    ],checklist:["Choose seasonal feeling before exact flower varieties","Share color and texture references","Ask what is dependable around your date","Allow thoughtful substitutions","Discuss heat/cold exposure","Identify arrangements that can be repurposed"],faq:[
      {question:"Are seasonal flowers always cheaper?",answer:"Not necessarily. Price depends on variety, quantity, sourcing, labor and design. Ask your florist what is plentiful and dependable for your specific date rather than assuming season alone determines cost."},
      {question:"Can we request one exact flower?",answer:"You can share priorities, but availability and quality can change. Discuss acceptable substitutions so the overall design is protected."}
    ]
  },
  {
    slug:"portland-wedding-dessert-table-guide",category:"Cakes",title:"Portland Wedding Dessert Table Guide: Variety, Quantities, Display and Keeping It From Becoming Clutter",dek:"Plan a wedding dessert table that feels intentional by balancing variety, serving, display, replenishment and the practical question of who handles everything once guests arrive.",readTime:"10 min read",seoTitle:"Portland Wedding Dessert Table Guide: Display & Planning",seoDescription:"Plan a Portland wedding dessert table with guidance on variety, quantities, display, serving, venue conditions and vendor responsibilities.",relatedSlugs:["portland-wedding-cake-dessert-guide","portland-wedding-catering-guide","portland-wedding-rentals-guide"],sections:[
      {heading:"Start with the role dessert plays in the reception",paragraphs:["A dessert table can replace cake, supplement a small cutting cake or become a late-evening experience. Decide what job it is doing before choosing six different sweets simply because they photograph well."]},
      {heading:"Variety should be understandable",paragraphs:["Different flavors and textures can make the table interesting, but too many tiny choices can create leftovers and make quantities harder to plan. Ask the baker or caterer how guests typically choose when several desserts are offered."]},
      {heading:"The display needs a service plan",paragraphs:["Platters, stands, labels, plates, napkins, utensils and replenishment all need an owner. Confirm whether the baker, caterer, planner or venue sets the table and who resets it as items disappear."]},
      {heading:"Temperature and timing still matter",paragraphs:["Buttercream, chocolate, cream fillings and other desserts can react differently to heat or long display periods. Tell the dessert vendor exactly where and when items will be displayed."]},
      {heading:"Use height and negative space instead of filling every inch",paragraphs:["A few coordinated stands, intentional groupings and readable labels can create more impact than covering a table with unrelated décor. Let the desserts be part of the design."]}
    ],checklist:["Decide whether dessert table replaces or supplements cake","Choose an intentional variety","Confirm serving quantities with vendor","Assign setup and replenishment","Check temperature/display requirements","Coordinate stands, labels and serving pieces"],faq:[
      {question:"Do we need one dessert for every guest?",answer:"The right quantity depends on portion size, number of varieties, whether cake is also served and how your guests will access dessert. Ask the baker or caterer to build quantities around the actual menu."},
      {question:"Who sets up a dessert table?",answer:"It varies. Confirm the responsibility in writing with the baker, caterer, planner or venue so display pieces and food do not arrive without a setup plan."}
    ]
  },
  {
    slug:"portland-wedding-ceremony-guide",category:"Officiants",title:"Portland Wedding Ceremony Guide: Build a Ceremony That Sounds Like the Two of You",dek:"Plan the ceremony around meaning, pacing, vows, readings, traditions and guest experience without turning it into a script assembled from wedding clichés.",readTime:"12 min read",seoTitle:"Portland Wedding Ceremony Guide: Vows, Readings & Structure",seoDescription:"Plan a personal Portland wedding ceremony with guidance on structure, vows, readings, traditions, officiants, pacing and guest experience.",relatedSlugs:["oregon-wedding-officiant-ceremony-guide","portland-wedding-planning-checklist","ways-to-make-your-portland-wedding-feel-more-personal"],sections:[
      {heading:"Start with what the ceremony should feel like",paragraphs:["Before choosing readings or writing vows, decide what you want the ceremony to communicate. Warm, funny, reflective, traditional, spiritual and concise are all valid directions.","Give your officiant a few words that describe the tone and the stories or values you want represented."]},
      {heading:"Structure creates freedom",paragraphs:["A simple sequence—entrance, welcome, story or reflection, readings or traditions, vows, rings, declaration and exit—can be customized heavily. Structure helps guests follow the moment without forcing you into one script."]},
      {heading:"Vows can be personal without becoming a performance",paragraphs:["Agree on approximate length and tone so one person does not arrive with three sentences while the other brings three pages. Private vows are also an option when deeply personal words do not feel right in front of a crowd."]},
      {heading:"Traditions should earn their place",paragraphs:["Include cultural, family or religious elements because they mean something to you. Ask the officiant to explain unfamiliar traditions briefly enough that guests can understand what they are witnessing."]},
      {heading:"Rehearse movement, not emotion",paragraphs:["Use the rehearsal for entrances, spacing, handoffs, microphones and the exit. You do not need to perform the emotional parts in advance for the ceremony to run smoothly."]}
    ],checklist:["Choose ceremony tone","Outline the ceremony structure","Agree on vow length and style","Confirm readings and traditions","Plan microphones and music cues","Rehearse entrances, handoffs and exit"],faq:[
      {question:"How long should a wedding ceremony be?",answer:"There is no required length. Build the ceremony around the elements that matter to you, then review the pacing with your officiant."},
      {question:"Do we have to write our own vows?",answer:"No. Personal vows, traditional vows, repeat-after-me vows and private vows can all create meaningful ceremonies."}
    ]
  },
  {
    slug:"portland-wedding-cocktail-hour-guide",category:"Planning",title:"Portland Wedding Cocktail Hour Guide: Guest Flow, Food, Drinks and What Happens While You’re Taking Photos",dek:"Design cocktail hour as a real part of the wedding rather than an hour guests simply wait through, with better flow, seating, food, drinks and transitions.",readTime:"11 min read",seoTitle:"Portland Wedding Cocktail Hour Guide: Food, Drinks & Flow",seoDescription:"Plan a Portland wedding cocktail hour with practical guidance on guest flow, seating, food, bar service, photos, entertainment and reception transitions.",relatedSlugs:["portland-wedding-guest-experience-guide","portland-wedding-mobile-bar-guide","portland-wedding-catering-guide"],sections:[
      {heading:"Cocktail hour needs a job",paragraphs:["It often gives the couple time for portraits and the venue time to prepare the reception, but guests should experience it as intentional hospitality rather than a holding area.","Think about what guests can eat, drink, see, hear and comfortably do during the transition."]},
      {heading:"Bar speed shapes the first ten minutes",paragraphs:["A large group arriving at once can create an immediate line. Discuss service points, menu complexity and whether water or nonalcoholic drinks can be available without waiting at the main bar."]},
      {heading:"Give people somewhere to land",paragraphs:["Not every guest needs a formal seat, but older guests, people with mobility needs and anyone wearing formal shoes may appreciate a mix of chairs, cocktail tables and lounge seating."]},
      {heading:"Food should be easy to understand and eat",paragraphs:["Passed bites, stations and displays create different traffic patterns. Consider dietary communication, plates and napkins, and whether the food can actually be eaten while standing and talking."]},
      {heading:"End with a clear transition",paragraphs:["A planner, DJ, band or venue team should know how guests will be invited into dinner. Avoid leaving people wondering whether they should keep socializing or find a seat."]}
    ],checklist:["Plan bar arrival capacity","Provide water and nonalcoholic choices","Include some seating","Confirm food service and dietary labels","Choose music or entertainment level","Assign the transition into reception"],faq:[
      {question:"Does cocktail hour have to be exactly one hour?",answer:"No. Its length should fit the photography, room transition and guest experience rather than the name."},
      {question:"Do we need entertainment during cocktail hour?",answer:"Not necessarily. Music and good hospitality may be enough; add an activity only if it improves the experience."}
    ]
  },
  {
    slug:"portland-wedding-lighting-guide",category:"Rentals",title:"Portland Wedding Lighting Guide: The Design Detail That Changes the Room After Sunset",dek:"Understand uplighting, string lights, candles, pin spots and practical lighting so the reception feels intentional after daylight disappears.",readTime:"11 min read",seoTitle:"Portland Wedding Lighting Guide: Reception & Event Lighting",seoDescription:"Plan Portland wedding lighting with guidance on uplighting, string lights, candles, pin spots, power, venue rules and photography.",relatedSlugs:["portland-wedding-rentals-guide","best-portland-wedding-venues-guide","how-to-choose-portland-wedding-photographer"],sections:[
      {heading:"Look at the venue at the time your reception will happen",paragraphs:["A room toured at noon can feel completely different after sunset. Ask for evening photos or visit later if possible so you understand existing fixtures, dark corners and the color of built-in light."]},
      {heading:"Separate atmosphere from functional light",paragraphs:["Candles and string lights can create mood while still leaving menus, pathways or buffet areas too dark. Identify where guests and vendors actually need to see clearly."]},
      {heading:"Use lighting to direct attention",paragraphs:["Pin spots, washes or focused fixtures can emphasize florals, cake, architectural details or a dance floor. More fixtures are not automatically better; decide what deserves visual priority."]},
      {heading:"Venue rules can change the design",paragraphs:["Open-flame restrictions, rigging limits, electrical capacity and installation windows matter. Confirm them before building inspiration around suspended lights or large candle installations."]},
      {heading:"Coordinate with photography and video",paragraphs:["Your media team can explain how extremely dark rooms, colored light or rapidly changing effects may appear on camera. The goal is not to light for photographs alone, but to avoid surprises."]}
    ],checklist:["Review venue after-dark imagery","Identify functional and atmospheric lighting","Confirm candle and rigging rules","Confirm power needs","Choose visual focal points","Discuss reception lighting with photo/video team"],faq:[
      {question:"Do we need professional wedding lighting?",answer:"Not every venue does. Evaluate the existing light after dark and add lighting where it improves atmosphere, safety or important focal points."},
      {question:"Are candles enough to light a reception?",answer:"They can create atmosphere but may not provide enough functional light for every space. Evaluate pathways, dining and service areas separately."}
    ]
  },
  {
    slug:"portland-wedding-save-the-date-guide",category:"Stationery",title:"Portland Wedding Save-the-Date Guide: What Guests Need to Know Before the Invitation",dek:"Use save-the-dates to give guests the information they actually need early, from date and location to travel planning and your wedding website.",readTime:"9 min read",seoTitle:"Wedding Save-the-Date Guide: Portland Timing & Information",seoDescription:"Plan wedding save-the-dates with guidance on timing, wording, Portland location details, travel information, websites and guest-list decisions.",relatedSlugs:["wedding-invitation-stationery-timeline-guide","portland-wedding-hotel-block-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"A save-the-date has one main job",paragraphs:["It tells someone they are invited and gives them enough information to protect the date. Date, couple names and general location are the core; a wedding website can hold evolving travel details."]},
      {heading:"Do not send one before the guest list is real",paragraphs:["A save-the-date functions as an invitation signal. Confirm the people receiving it are actually on the wedding guest list before sending."]},
      {heading:"Location detail should match what guests need",paragraphs:["Portland, Oregon may be enough for many events. A wedding farther into wine country, the Gorge, coast or Mount Hood area may benefit from a more specific location so travelers can make sensible plans."]},
      {heading:"Digital and printed formats solve the same problem differently",paragraphs:["Printed pieces can establish design and feel tangible; digital versions can be fast and easy to update. Choose based on your guests, budget and communication style rather than etiquette anxiety."]},
      {heading:"Use the website for information that may change",paragraphs:["Hotel links, transportation, schedules and recommendations can evolve. Keep the save-the-date clean and point guests to one reliable place for updates."]}
    ],checklist:["Confirm guest list before sending","Include date and general location","Add wedding website if ready","Give travelers useful geographic context","Choose print or digital intentionally","Keep changing logistics online"],faq:[
      {question:"Does a save-the-date mean the person is definitely invited?",answer:"Guests generally understand it that way, so send only to people you intend to invite."},
      {question:"Do we need printed save-the-dates?",answer:"No. Printed and digital formats can both communicate the essential information."}
    ]
  },
  {
    slug:"portland-wedding-first-look-guide",category:"Photography",title:"First Look or Aisle Reveal? A Portland Wedding Photography Guide to Choosing Your Timeline",dek:"Compare first looks and aisle reveals by emotion, portrait timing, guest flow, light and the kind of wedding-day experience you want.",readTime:"10 min read",seoTitle:"Wedding First Look vs Aisle Reveal | Portland Photography Guide",seoDescription:"Compare a wedding first look with an aisle reveal using Portland-specific guidance on photography timing, light, portraits, emotion and guest flow.",relatedSlugs:["how-to-choose-portland-wedding-photographer","portland-wedding-photographer-cost-guide","portland-wedding-videography-photography-team-guide"],sections:[
      {heading:"Neither option is more romantic",paragraphs:["A private first look and seeing each other for the first time at the ceremony create different rhythms, not different levels of meaning. Choose based on how you want the day to feel."]},
      {heading:"A first look can move portraits earlier",paragraphs:["Seeing each other before the ceremony may allow couple, wedding-party or family portraits to happen earlier, which can free more cocktail-hour time. The exact benefit depends on the photographer, locations and family-photo plan."]},
      {heading:"An aisle reveal protects that one first moment",paragraphs:["Waiting can make the ceremony entrance the first time you see each other dressed for the wedding. It may also mean more portraits need to happen afterward."]},
      {heading:"Portland light changes through the year",paragraphs:["Winter daylight can disappear earlier, while summer evenings can stay bright much later. Ask your photographer to build the portrait strategy around your actual date rather than copying a timeline from another season."]},
      {heading:"You can create a third option",paragraphs:["A first touch, private letter exchange or private vows can give you time together without seeing the full look. There is no need to force the decision into two wedding-industry categories."]}
    ],checklist:["Decide how you want the pre-ceremony hours to feel","Ask photographer how each option affects portraits","Check daylight for your wedding date","Consider family-photo timing","Discuss video coverage if applicable","Choose the option for experience, not trend"],faq:[
      {question:"Does a first look ruin the aisle moment?",answer:"That is subjective. Many couples still experience a strong ceremony entrance after a first look; others prefer to preserve the first sight for the aisle."},
      {question:"Do we need a first look for good photos?",answer:"No. It is a timeline option, not a photography requirement."}
    ]
  },
  {
    slug:"portland-wedding-seating-chart-guide",category:"Planning",title:"Portland Wedding Seating Chart Guide: Build a Room That Feels Social Instead of Stressful",dek:"Turn the guest list into a practical seating plan with better table groupings, accessibility, family considerations and room flow.",readTime:"11 min read",seoTitle:"Wedding Seating Chart Guide: Tables, Guests & Room Flow",seoDescription:"Build a wedding seating chart with guidance on table groupings, accessibility, family dynamics, room flow and final guest changes.",relatedSlugs:["portland-wedding-guest-experience-guide","portland-wedding-rentals-guide","portland-wedding-planning-checklist"],sections:[
      {heading:"Start after the guest list is stable enough to be useful",paragraphs:["You can sketch table groups early, but detailed seating becomes much easier after RSVPs. Begin with households, family groups and obvious friend circles rather than assigning individual seats randomly."]},
      {heading:"Seat for conversation, not perfect symmetry",paragraphs:["A table can mix people who do not already know one another when they have a reason to connect. Avoid using the chart only to make every table reach an identical number."]},
      {heading:"Accessibility affects placement",paragraphs:["Consider mobility, hearing, proximity to restrooms, speakers, dance floor volume and clear routes. Ask guests directly when an accommodation matters rather than guessing."]},
      {heading:"Family dynamics deserve quiet planning",paragraphs:["Divorces, estrangements and other relationships may influence table placement. Share sensitive information with the planner or venue team only as needed so they can support the plan discreetly."]},
      {heading:"Leave room for late changes",paragraphs:["Do not print final seating materials before the deadline required by your stationer or venue. Keep one source of truth so a last-minute update does not exist in three conflicting spreadsheets."]}
    ],checklist:["Wait for useful RSVP data","Group obvious households and circles","Consider accessibility and sound","Account for sensitive relationships","Coordinate table sizes with floor plan","Set a final print/update deadline"],faq:[
      {question:"Do we need assigned seats or just assigned tables?",answer:"Either can work. Assigned tables provide structure with flexibility; assigned seats can help with plated meal service or a more controlled layout."},
      {question:"Do couples have to sit at a sweetheart table?",answer:"No. A sweetheart table, head table or regular guest table are all options."}
    ]
  },
  {
    slug:"portland-wedding-wine-country-guide",category:"Portland Guide",title:"Planning a Wine Country Wedding Near Portland: Venues, Transportation and the Guest Weekend",dek:"Plan an Oregon wine country wedding around the things that change outside the city: transportation, lodging, weather, vendor travel and the guest weekend.",readTime:"12 min read",seoTitle:"Oregon Wine Country Wedding Guide Near Portland",seoDescription:"Plan an Oregon wine country wedding near Portland with guidance on venues, transportation, lodging, weather, vendor travel and guest logistics.",relatedSlugs:["best-portland-wedding-venues-guide","portland-wedding-transportation-guide","portland-wedding-hotel-block-guide"],sections:[
      {heading:"Treat location as part of the guest experience",paragraphs:["Wine country can create a destination feeling without requiring every guest to fly somewhere else. The tradeoff is that transportation, lodging and late-night options need more deliberate planning than they might at a central Portland venue.","Map the wedding from the guest's perspective before falling in love with a view."]},
      {heading:"Ask where guests will actually stay",paragraphs:["Nearby lodging can be limited or spread across several towns. Compare the venue location with realistic hotel, vacation-rental and transportation options before recommending one area to everyone."]},
      {heading:"Transportation deserves an early decision",paragraphs:["Rideshare availability can be less predictable outside central Portland. If many guests will drink or stay in one area, discuss shuttle or arranged transportation early enough to understand the route and schedule."]},
      {heading:"Vendor travel changes the timeline",paragraphs:["Confirm travel fees, arrival windows and whether vendors need extra load-in time. A Portland-based team may serve wine country regularly, but the contract should still reflect the actual location."]},
      {heading:"Build the weather plan around the landscape",paragraphs:["Open vineyard views are part of the appeal, but heat, wind, rain and cooler evenings can change guest comfort. Evaluate shade, indoor backup and walking surfaces alongside the scenery."]}
    ],checklist:["Map guest lodging options","Decide transportation strategy","Confirm vendor travel terms","Inspect weather backup","Plan guest arrival directions","Consider the full weekend, not only ceremony"],faq:[
      {question:"Do we need a shuttle for a wine country wedding?",answer:"Not every wedding does, but it is worth evaluating when lodging is concentrated, parking is limited or guests may not have reliable late-night transportation."},
      {question:"Should guests stay in Portland or closer to the venue?",answer:"Either can work. Compare the wedding-day transportation with what guests may want to do during the rest of the weekend."}
    ]
  },
  {
    slug:"mount-hood-wedding-planning-guide",category:"Portland Guide",title:"Mount Hood Wedding Planning Guide: Mountain Weather, Travel and Guest Comfort",dek:"Plan a Mount Hood-area wedding with a realistic approach to mountain travel, changing weather, lodging, photography and guest comfort.",readTime:"12 min read",seoTitle:"Mount Hood Wedding Planning Guide: Weather, Travel & Venues",seoDescription:"Plan a Mount Hood wedding with practical guidance on mountain weather, travel, lodging, guest comfort, photography and vendor logistics.",relatedSlugs:["portland-wedding-rain-plan-guide","portland-wedding-transportation-guide","outdoor-wedding-venues-portland-guide"],sections:[
      {heading:"A mountain wedding needs a mountain plan",paragraphs:["Mount Hood can create a dramatic Oregon setting, but elevation and travel make conditions less interchangeable with Portland. Ask the venue about seasonal access, typical backup procedures and what guests should know for your date."]},
      {heading:"Give guests more travel context than an address",paragraphs:["Explain driving expectations, lodging areas and transportation plans clearly. Guests unfamiliar with the mountain may need more guidance than they would for a city venue."]},
      {heading:"Weather can change the schedule and wardrobe",paragraphs:["Temperature, precipitation and road conditions deserve attention without trying to predict the wedding day months ahead. Build flexible portrait locations and guest-comfort options into the venue plan."]},
      {heading:"Photography benefits from realistic movement time",paragraphs:["Mountain scenery can tempt couples to add multiple portrait stops. Discuss travel and light with the photographer so the search for scenery does not consume the experience."]},
      {heading:"Keep the guest experience concentrated when possible",paragraphs:["When lodging, rehearsal events and the wedding are reasonably close together, guests spend less of the weekend navigating unfamiliar roads. Consider geography when choosing each additional event."]}
    ],checklist:["Ask venue about seasonal access","Share detailed guest travel guidance","Review lodging geography","Build weather backup","Discuss portrait travel time","Confirm vendor mountain travel terms"],faq:[
      {question:"Is Mount Hood weather the same as Portland weather?",answer:"No. Mountain conditions can differ materially from Portland, so use location-specific forecasts close to the event and venue guidance for planning."},
      {question:"Should we plan multiple mountain photo locations?",answer:"Only if the travel time fits the day you want. Ask your photographer to prioritize locations without sacrificing too much wedding time."}
    ]
  },
  {
    slug:"columbia-river-gorge-wedding-guide",category:"Portland Guide",title:"Columbia River Gorge Wedding Guide: Wind, Travel, Views and a Better Guest Plan",dek:"Use the Gorge's scenery without letting geography run the wedding, with practical planning for wind, travel, guest movement, vendors and weather backups.",readTime:"12 min read",seoTitle:"Columbia River Gorge Wedding Guide Near Portland",seoDescription:"Plan a Columbia River Gorge wedding with guidance on travel, wind, weather, guest logistics, vendor timing and scenic portrait planning.",relatedSlugs:["outdoor-wedding-venues-portland-guide","portland-wedding-transportation-guide","portland-wedding-rain-plan-guide"],sections:[
      {heading:"The view should not be the only venue criterion",paragraphs:["A Gorge venue can deliver a sense of place that is hard to reproduce, but guest access, parking, restrooms, weather cover and reception flow still determine how the wedding feels.","Evaluate the practical plan with the same attention as the ceremony backdrop."]},
      {heading:"Wind deserves its own conversation",paragraphs:["Exposed locations can affect ceremony audio, florals, signage, hair and lightweight décor. Ask the venue and vendors what they normally secure, move or avoid when conditions are windy."]},
      {heading:"Travel time can be deceptive",paragraphs:["Weekend traffic, scenic stops and unfamiliar roads can change arrival time. Give guests clear directions and build vendor timelines around the actual venue rather than a generic distance from Portland."]},
      {heading:"Scenic portraits should fit the permit and access reality",paragraphs:["Do not assume every viewpoint or trail is an event photo location. Ask your photographer about access, timing and any permissions that may apply to the places you are considering."]},
      {heading:"Keep the backup worthy of the destination",paragraphs:["If scenery is a major reason you chose the venue, look for covered or indoor spaces that still feel connected to the setting so weather does not erase the experience you wanted."]}
    ],checklist:["Evaluate guest access and parking","Ask about wind procedures","Build realistic travel time","Discuss ceremony audio","Check portrait access requirements","Tour the actual weather backup"],faq:[
      {question:"Is wind a concern for Gorge weddings?",answer:"It can be at exposed locations. Ask your specific venue and vendors how they plan for wind rather than assuming conditions from Portland."},
      {question:"Can we take wedding photos anywhere in the Gorge?",answer:"Not necessarily. Access, closures and permit rules vary by location, so verify the specific place before building it into the timeline."}
    ]
  },
  {
    slug:"oregon-coast-wedding-from-portland-guide",category:"Portland Guide",title:"Planning an Oregon Coast Wedding from Portland: Weather, Travel and the Weekend Experience",dek:"A practical guide for Portland couples planning an Oregon Coast wedding, from guest travel and lodging to wind, beach access, backup spaces and vendor logistics.",readTime:"12 min read",seoTitle:"Oregon Coast Wedding Planning Guide for Portland Couples",seoDescription:"Plan an Oregon Coast wedding from Portland with guidance on weather, guest travel, lodging, beach access, vendor logistics and backup plans.",relatedSlugs:["portland-wedding-rain-plan-guide","portland-wedding-hotel-block-guide","portland-wedding-transportation-guide"],sections:[
      {heading:"The coast turns the wedding into a trip",paragraphs:["Even for Oregon guests, a coast wedding often involves overnight lodging and more travel coordination. Think about the weekend experience, not only the ceremony hour."]},
      {heading:"Beach access is different from a venue lawn",paragraphs:["Sand, stairs, public access, wind and mobility can affect who can comfortably reach a ceremony location. Walk the route and have an alternative for guests who need easier access."]},
      {heading:"Design for wind before fighting it",paragraphs:["Low arrangements, secured signage, practical hairstyles and fewer lightweight objects may work better than trying to reproduce an indoor inspiration image on an exposed beach."]},
      {heading:"A real indoor backup changes everything",paragraphs:["Coastal weather can be part of the beauty, but guests still need protection. Evaluate the backup space for capacity, ceremony layout, photography and how quickly the event can move."]},
      {heading:"Vendor travel and lodging should be explicit",paragraphs:["Ask Portland-area vendors about coast travel, mileage, lodging and schedule expectations before booking. A long return drive after a late reception can affect how a vendor prices or staffs the event."]}
    ],checklist:["Map guest lodging early","Walk ceremony access route","Plan for wind","Inspect indoor backup","Confirm vendor travel/lodging terms","Give guests weekend travel information"],faq:[
      {question:"Can an Oregon Coast wedding be a day trip from Portland?",answer:"It may be for some guests, but distance, reception end time and individual comfort vary. Give guests enough information to choose lodging if they prefer."},
      {question:"Should we have an indoor backup for a beach ceremony?",answer:"A protected alternative is a strong practical option because wind, rain and temperature can affect both comfort and setup."}
    ]
  },
  {
    slug:"portland-wedding-brunch-guide",category:"Catering",title:"Portland Brunch Wedding Guide: Morning Timelines, Menus and a Reception That Still Feels Like a Celebration",dek:"Plan a brunch wedding around earlier beauty and vendor timelines, guest arrival, coffee, food service and the kind of celebration you actually want.",readTime:"11 min read",seoTitle:"Portland Brunch Wedding Guide: Timeline, Menu & Reception",seoDescription:"Plan a Portland brunch wedding with guidance on morning timelines, catering, coffee, guest experience, photography and reception style.",relatedSlugs:["portland-wedding-catering-guide","portland-bridal-hair-makeup-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"Work backward from the ceremony start",paragraphs:["An earlier ceremony moves photography, beauty, setup and vendor arrival earlier too. Build the morning timeline before committing to a start time that looks appealing on paper."]},
      {heading:"Coffee is part of hospitality",paragraphs:["For a morning or midday wedding, think about when guests can get coffee, water and nonalcoholic drinks rather than waiting until meal service."]},
      {heading:"Brunch food can be elegant without pretending to be dinner",paragraphs:["Lean into food that suits the time of day. Ask the caterer how buffet, stations, family-style or plated service changes execution for the menu you want."]},
      {heading:"Decide what kind of party follows",paragraphs:["A brunch wedding can include dancing, lawn games, a relaxed meal or an afternoon departure. Do not force a late-night reception template onto an earlier event unless that is genuinely what you want."]},
      {heading:"Use daylight as an advantage",paragraphs:["Earlier events can create abundant natural light, but the direction and intensity still depend on venue and season. Ask the photographer how the chosen time affects ceremony and portrait locations."]}
    ],checklist:["Build morning vendor timeline","Plan early coffee/water","Choose brunch-appropriate service style","Decide reception energy","Coordinate daylight with photographer","Communicate early arrival clearly"],faq:[
      {question:"Can a brunch wedding still have dancing?",answer:"Yes. The reception format is your choice; just build the music and timeline around the atmosphere you want."},
      {question:"Is brunch automatically less expensive?",answer:"Not necessarily. Cost depends on venue, menu, staffing, rentals and scope, so compare actual proposals rather than assuming time of day determines price."}
    ]
  },
  {
    slug:"portland-wedding-late-night-food-guide",category:"Catering",title:"Portland Wedding Late-Night Food Guide: When a Snack Is Worth It and How to Serve It Well",dek:"Plan late-night wedding food around reception length, dinner timing, guest energy and service logistics instead of adding another menu item by default.",readTime:"9 min read",seoTitle:"Portland Wedding Late-Night Food Guide: Snacks & Service",seoDescription:"Plan Portland wedding late-night food with guidance on timing, quantities, service, dietary needs and whether your reception actually needs it.",relatedSlugs:["portland-wedding-catering-guide","portland-wedding-after-party-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"First decide whether guests will actually be hungry",paragraphs:["Dinner timing, reception length, alcohol service and after-party plans all matter. A substantial dinner followed by an early ending may not need another food service."]},
      {heading:"Choose food that can be served quickly",paragraphs:["Late-night food works best when guests understand it immediately and can get it without leaving the dance floor for a long plated experience. Ask the caterer what can be held and served safely at the planned time."]},
      {heading:"Timing matters more than novelty",paragraphs:["Serve too early and it competes with dessert; too late and many guests may have left. Place it where it supports the reception flow."]},
      {heading:"Remember dietary needs still exist at midnight",paragraphs:["If late-night food is part of the hosted meal experience, consider whether guests with common dietary restrictions have a meaningful option too."]},
      {heading:"Make cleanup someone else's assigned job",paragraphs:["Confirm who serves, clears and removes packaging or leftovers. A food truck, caterer and outside restaurant order can each create different responsibilities."]}
    ],checklist:["Check dinner-to-end-of-night gap","Choose fast service format","Set intentional serving time","Include dietary options where practical","Confirm venue outside-food rules","Assign cleanup and leftovers"],faq:[
      {question:"Do we need a late-night snack?",answer:"No. Add one when it improves a long reception or fills a real gap after dinner, not simply because it appears on wedding checklists."},
      {question:"Can we bring in restaurant food late at night?",answer:"Possibly, but confirm venue and catering rules, delivery timing, food-safety responsibilities and cleanup first."}
    ]
  },
  {
    slug:"portland-wedding-rehearsal-dinner-guide",category:"Planning",title:"Portland Rehearsal Dinner Guide: Who to Invite, Where to Host and How Much to Plan",dek:"Build a rehearsal dinner that welcomes the people closest to the wedding without accidentally planning a second reception.",readTime:"10 min read",seoTitle:"Portland Rehearsal Dinner Guide: Guests, Venues & Planning",seoDescription:"Plan a Portland rehearsal dinner with practical guidance on the guest list, location, timing, menu, speeches and weekend logistics.",relatedSlugs:["portland-wedding-welcome-party-guide","portland-wedding-guest-experience-guide","portland-wedding-catering-guide"],sections:[
      {heading:"Start with the purpose, not the restaurant",paragraphs:["The rehearsal dinner usually works best as a transition into the wedding weekend: feed the people involved in the rehearsal, bring key family and friends together, and create space for conversation before the wedding day becomes busy.","Decide what you want the evening to accomplish before choosing a format."]},
      {heading:"Build the guest list deliberately",paragraphs:["The dinner can be intimate or expanded, but make the boundary clear. Consider the wedding party, partners, immediate family, ceremony participants and anyone whose presence is important to the rehearsal itself."]},
      {heading:"Choose a location that reduces movement",paragraphs:["A beautiful Portland restaurant across town may be less appealing after a rehearsal if everyone must fight traffic, park again and arrive at different times. Compare atmosphere with the actual route between rehearsal, dinner and lodging."]},
      {heading:"Keep the program lighter than the wedding",paragraphs:["Toasts, gifts and family traditions can fit naturally here, especially if they would crowd the reception. Leave enough unstructured time for people to connect."]},
      {heading:"Protect the next morning",paragraphs:["A late rehearsal dinner can affect beauty calls, setup, photography and the energy of the wedding party. Set an ending that fits the next day's first required arrival."]}
    ],checklist:["Define the purpose","Confirm guest list","Map rehearsal-to-dinner travel","Choose service style","Plan any toasts or gifts","Set a realistic end time"],faq:[
      {question:"Does everyone invited to the wedding need a rehearsal dinner invitation?",answer:"No. The rehearsal dinner can be a smaller event centered on the people participating in the rehearsal and close family or friends."},
      {question:"Can the rehearsal dinner be casual?",answer:"Yes. The format can be very different from the wedding as long as guests understand the plan and hospitality is intentional."}
    ]
  },
  {
    slug:"portland-wedding-welcome-party-guide",category:"Planning",title:"Portland Wedding Welcome Party Guide: A Better Start to the Wedding Weekend",dek:"Plan a Portland welcome party that gives traveling guests a warm first night without exhausting the couple, budget or wedding-day timeline.",readTime:"10 min read",seoTitle:"Portland Wedding Welcome Party Guide: Ideas & Planning",seoDescription:"Plan a Portland wedding welcome party with guidance on guest lists, timing, food, drinks, locations and keeping the event manageable.",relatedSlugs:["portland-wedding-rehearsal-dinner-guide","portland-wedding-hotel-block-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"Decide whether the welcome party solves a real need",paragraphs:["A welcome party is especially useful when many guests are traveling, arriving the day before or staying near one another. It gives people a place to gather without requiring the couple to individually coordinate dozens of plans."]},
      {heading:"Make arrival flexible",paragraphs:["Travel delays are normal. A drop-in window often works better than a tightly programmed event when guests are coming from the airport, driving into Portland or checking into hotels."]},
      {heading:"You do not need to host a second full dinner",paragraphs:["Drinks and light food, dessert, a casual brewery gathering or another simple format can be enough. Tell guests what is being served so they know whether to eat beforehand."]},
      {heading:"Put convenience high on the location list",paragraphs:["A location near the hotel concentration or rehearsal activity can make the evening easier for guests and reduce transportation questions."]},
      {heading:"Give yourselves permission to leave",paragraphs:["The couple does not need to be the last people at the party. Set an exit time that protects sleep and wedding-day preparation."]}
    ],checklist:["Estimate traveling guests","Choose drop-in or fixed start","Clarify food expectations","Prioritize convenient location","Share transportation details","Set couple departure time"],faq:[
      {question:"Is a welcome party necessary?",answer:"No. It can be valuable for a travel-heavy guest list, but it should support the weekend rather than create another obligation."},
      {question:"Do we have to pay for everyone's dinner?",answer:"The format is up to you. Be clear on the invitation about what is hosted so guests can plan appropriately."}
    ]
  },
  {
    slug:"portland-wedding-kids-guide",category:"Planning",title:"Kids at Your Portland Wedding: Invitations, Seating, Food and a Plan Parents Will Appreciate",dek:"Decide whether children fit your wedding and, if they do, make the invitation, meal, seating and schedule easier for both kids and parents.",readTime:"10 min read",seoTitle:"Kids at Weddings: Portland Planning Guide for Couples",seoDescription:"Plan for children at a Portland wedding with practical guidance on invitations, meals, seating, entertainment, safety and parent communication.",relatedSlugs:["portland-wedding-guest-experience-guide","portland-wedding-catering-guide","portland-wedding-planning-checklist"],sections:[
      {heading:"Make the invitation policy understandable",paragraphs:["Whether the wedding is adults-only, includes immediate-family children or welcomes every age, consistency and clear addressing prevent confusion. Avoid making parents guess from vague wording."]},
      {heading:"Ask the venue where children can safely be",paragraphs:["Water, stairs, roads, fireplaces, balconies and large outdoor properties can change supervision needs. Parents remain responsible for their children, but venue layout still matters."]},
      {heading:"Treat meals as a real RSVP detail",paragraphs:["Ask the caterer whether children's meals, high chairs or booster seats are available and how ages affect meal counts. Collect what the caterer actually needs rather than inventing a complicated RSVP."]},
      {heading:"Seat families for the wedding they are attending",paragraphs:["Parents may appreciate easy exits during the ceremony and enough room at dinner for child seating. A thoughtful table location can matter more than a bag of activities."]},
      {heading:"Consider the clock",paragraphs:["Young children may fade earlier than adult guests. If many families are attending, communicate key timing clearly so parents can decide how long to stay."]}
    ],checklist:["Set child invitation policy","Confirm venue safety considerations","Ask about children's meals","Collect high-chair needs","Plan family-friendly seating","Communicate important timing"],faq:[
      {question:"How do we communicate an adults-only wedding?",answer:"Address invitations to the invited adults and use clear, courteous wording in your wedding information so parents can make arrangements."},
      {question:"Do we need special entertainment for kids?",answer:"Not necessarily. Age mix, event length and venue matter more than following a universal rule."}
    ]
  },
  {
    slug:"portland-wedding-pet-guide",category:"Planning",title:"Pets in Your Portland Wedding: A Practical Plan for Photos, Ceremony and a Stress-Free Exit",dek:"Include a dog or other pet in the wedding without making them stay longer than they are comfortable, with a plan for venue rules, handling and transportation.",readTime:"9 min read",seoTitle:"Pets in Portland Weddings: Ceremony & Photo Planning Guide",seoDescription:"Include your pet in a Portland wedding with guidance on venue rules, handlers, ceremony timing, photos, transportation and pet comfort.",relatedSlugs:["outdoor-wedding-venues-portland-guide","portland-wedding-guest-experience-guide","portland-wedding-day-emergency-kit-guide"],sections:[
      {heading:"Ask the venue before designing the moment",paragraphs:["Pet policies can differ by property and by indoor or outdoor space. Confirm what is allowed, where the pet can go and whether there are cleanup or leash requirements."]},
      {heading:"Give the pet one dedicated person",paragraphs:["The couple and wedding party already have jobs. Assign a trusted handler or professional service to manage arrival, water, walks and departure so the pet is not passed from person to person."]},
      {heading:"Short appearances are often easier",paragraphs:["A pet can join portraits or the ceremony without staying through dinner and dancing. Build the plan around the animal's temperament rather than the length of the wedding."]},
      {heading:"Practice the route, not a performance",paragraphs:["If the pet will walk down the aisle, familiarize them with the handler and equipment. The goal is a safe, comfortable appearance, not perfect choreography."]},
      {heading:"Plan the exit before the entrance",paragraphs:["Know exactly who takes the pet home or to lodging, when they leave and what supplies travel with them."]}
    ],checklist:["Confirm venue pet rules","Choose dedicated handler","Plan arrival window","Pack water/leash/supplies","Choose photo or ceremony role","Confirm departure destination"],faq:[
      {question:"Should our dog stay for the whole reception?",answer:"Only if the venue allows it and the environment genuinely suits the dog. A shorter appearance is often easier to manage."},
      {question:"Who should handle our pet during the wedding?",answer:"Choose someone who is not central to the ceremony or hire a pet-handling service so the responsibility remains clear."}
    ]
  },
  {
    slug:"portland-wedding-accessibility-guide",category:"Planning",title:"A More Accessible Portland Wedding: Questions to Ask Before Guests Have to Ask You",dek:"Use venue access, seating, transportation, communication and sensory considerations to make the wedding easier for more of the people you invited.",readTime:"12 min read",seoTitle:"Accessible Portland Wedding Planning Guide: Venue & Guest Needs",seoDescription:"Plan a more accessible Portland wedding with practical questions about venue access, seating, restrooms, transportation, communication and guest comfort.",relatedSlugs:["best-portland-wedding-venues-guide","portland-wedding-transportation-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"Accessibility starts before the invitation goes out",paragraphs:["Ask venues detailed questions about the route from parking or drop-off to ceremony, cocktail hour, dinner and restrooms. A venue described as accessible may still include gravel, slopes or separate routes that matter to individual guests.","The goal is not to assume what every guest needs; it is to understand the environment well enough to answer them."]},
      {heading:"Walk the complete guest route",paragraphs:["Look at surfaces, thresholds, elevators, distances, seating, lighting and restroom access. If an alternate route exists, ask how guests will find it and whether staff will be available."]},
      {heading:"Transportation includes the final few hundred feet",paragraphs:["A shuttle is only useful if its pickup and drop-off work for the people riding it. Ask where vehicles can stop and how guests move from that point into the event."]},
      {heading:"Create a simple way for guests to tell you what they need",paragraphs:["Wedding websites or RSVP forms can invite guests to share accessibility or accommodation needs without requiring a public conversation. Follow up directly when more detail is useful."]},
      {heading:"Think beyond mobility",paragraphs:["Sound, lighting, seating, food allergies and quiet space can also affect the experience. Ask vendors what accommodations are possible and communicate confirmed information clearly."]}
    ],checklist:["Walk parking-to-event route","Inspect restroom access","Ask about alternate routes/elevators","Review shuttle drop-off","Collect accommodation needs privately","Share confirmed access information"],faq:[
      {question:"How can we ask guests about accessibility needs?",answer:"A private RSVP or wedding-website field can invite guests to share accommodations they need, followed by direct conversation when appropriate."},
      {question:"Is a venue's accessibility label enough?",answer:"It is a starting point. Ask about the specific routes and spaces your wedding will use so you can give guests accurate information."}
    ]
  },
  {
    slug:"portland-wedding-parking-guide",category:"Transportation",title:"Portland Wedding Parking Guide: What Guests Need to Know Before They Arrive",dek:"Prevent parking from becoming the first stressful part of the wedding with a clear plan for capacity, street restrictions, drop-off, rideshare and guest communication.",readTime:"9 min read",seoTitle:"Portland Wedding Parking Guide: Guest & Venue Planning",seoDescription:"Plan Portland wedding parking with guidance on capacity, street parking, drop-off, rideshare, shuttles, accessibility and guest communication.",relatedSlugs:["portland-wedding-transportation-guide","portland-wedding-guest-experience-guide","best-portland-wedding-venues-guide"],sections:[
      {heading:"Ask for a number, not 'plenty of parking'",paragraphs:["Find out how many spaces the venue controls and whether those spaces are shared with another event or business. Compare that with the guest list and likely carpooling."]},
      {heading:"Street parking needs a backup thought",paragraphs:["Availability can change by neighborhood, time and nearby events. If guests depend on street parking, explain that clearly and identify realistic alternatives."]},
      {heading:"Design the drop-off experience",paragraphs:["Older guests, people wearing formal shoes and guests with mobility needs may benefit from a clear drop-off point even when parking is nearby."]},
      {heading:"Rideshare is not the same as a transportation plan",paragraphs:["Rideshare can work well in many Portland locations, but pickup congestion, late-night demand and rural venues can complicate it. Decide whether the wedding needs something more structured."]},
      {heading:"Put the useful information where guests will see it",paragraphs:["Share parking instructions before the wedding and use signage only to finish the job. Guests should not have to discover the parking plan after reaching the venue entrance."]}
    ],checklist:["Confirm controlled parking capacity","Check shared-lot restrictions","Identify drop-off point","Assess rideshare reliability","Plan overflow option","Publish parking instructions"],faq:[
      {question:"How much parking does a wedding need?",answer:"There is no universal car-per-guest ratio. Use your guest list, venue capacity, hotel concentration and transportation plan to estimate actual vehicle demand."},
      {question:"Should parking instructions go on the invitation?",answer:"Detailed directions usually fit better on a wedding website or information card, with a short pointer from the invitation suite if needed."}
    ]
  },
  {
    slug:"portland-wedding-vendor-meals-guide",category:"Catering",title:"Wedding Vendor Meals in Portland: Who Needs One, When to Serve It and What to Confirm",dek:"Coordinate vendor meals without guessing by checking contracts, work windows, catering logistics and the timeline before final counts are due.",readTime:"9 min read",seoTitle:"Portland Wedding Vendor Meals Guide: Counts & Timing",seoDescription:"Plan wedding vendor meals in Portland with guidance on contracts, meal counts, timing, catering coordination and dietary needs.",relatedSlugs:["portland-wedding-catering-guide","portland-wedding-planning-checklist","portland-wedding-day-timeline-guide"],sections:[
      {heading:"Start with contracts, not a universal list",paragraphs:["Photographers, planners, DJs, videographers and other vendors may have meal requirements based on how long they are working. Review each contract and ask when language is unclear."]},
      {heading:"Count people, not companies",paragraphs:["A vendor team may include assistants, second shooters or technicians. Confirm the actual headcount close enough to the catering deadline that staffing is known."]},
      {heading:"Meal timing affects the wedding timeline",paragraphs:["A photographer or planner who eats long after the couple may be unavailable during speeches, dances or sunset portraits. Coordinate vendor meal timing with the people building the timeline."]},
      {heading:"Ask what the caterer calls a vendor meal",paragraphs:["Some caterers offer a separate vendor meal while others serve the same menu. Understand the price, service location and whether dietary needs can be accommodated."]},
      {heading:"Give vendors a practical place to eat",paragraphs:["The meal location should allow working vendors to eat efficiently and return when needed. Ask the venue where vendor meals normally happen."]}
    ],checklist:["Review vendor contracts","Confirm working headcount","Collect dietary needs","Ask caterer meal format","Coordinate meal timing","Confirm vendor meal location"],faq:[
      {question:"Which wedding vendors need meals?",answer:"Check each vendor's contract and work schedule rather than relying on a universal list. Long on-site coverage commonly affects meal requirements."},
      {question:"Do vendor meals have to match guest meals?",answer:"Not necessarily. Ask the caterer what vendor meal options are offered and make sure they satisfy any contractual requirements."}
    ]
  },
  {
    slug:"portland-wedding-day-emergency-kit-guide",category:"Planning",title:"Portland Wedding-Day Emergency Kit: Pack What Solves Problems, Not an Entire Drugstore",dek:"Build a compact wedding-day kit around clothing, weather, beauty, comfort and small fixes, then put it in the hands of someone who can actually find it.",readTime:"8 min read",seoTitle:"Portland Wedding-Day Emergency Kit Checklist",seoDescription:"Build a practical Portland wedding-day emergency kit for clothing fixes, weather, beauty, comfort and small problems without overpacking.",relatedSlugs:["portland-wedding-rain-plan-guide","portland-bridal-hair-makeup-guide","portland-wedding-planning-checklist"],sections:[
      {heading:"Pack for the problems your wedding can realistically have",paragraphs:["The useful kit for an outdoor fall wedding is different from the kit for an indoor summer reception. Start with venue, clothing, weather and personal needs rather than copying a giant internet checklist."]},
      {heading:"Clothing fixes earn their space",paragraphs:["A small sewing kit, fashion tape, stain treatment appropriate for the fabric, safety pins and a lint roller can address common wardrobe problems without filling a suitcase."]},
      {heading:"Weather items should match the actual plan",paragraphs:["Umbrellas, towels, sunscreen, hand warmers or a few clear ponchos may be useful depending on season and venue. The emergency kit should support the weather plan, not replace it."]},
      {heading:"Keep personal medication personal",paragraphs:["Guests and wedding-party members should manage their own prescribed medication. For shared supplies, avoid turning an organizer into an informal pharmacy."]},
      {heading:"Assign the kit a home and a person",paragraphs:["A perfect kit locked in a car is not useful. Decide who carries it and where it stays during preparation, ceremony and reception."]}
    ],checklist:["Small sewing kit","Fashion tape and safety pins","Fabric-appropriate stain item","Lint roller","Weather-specific items","Tissues and blotting papers","Phone charging option","Designated kit keeper"],faq:[
      {question:"Who should carry the emergency kit?",answer:"Give it to a planner, attendant or trusted person who knows where it is and is not occupied with a critical ceremony role."},
      {question:"Do we need every item on a wedding emergency checklist?",answer:"No. Pack for your venue, season, clothing and people so the kit stays compact enough to be useful."}
    ]
  },
  {
    slug:"portland-wedding-day-timeline-guide",category:"Planning",title:"How to Build a Portland Wedding-Day Timeline That Actually Breathes",dek:"Build the day around real transitions, light, meals and vendor needs instead of stacking every moment back-to-back.",readTime:"11 min read",seoTitle:"Portland Wedding Day Timeline Guide | MPW",seoDescription:"Build a realistic Portland wedding-day timeline with ceremony, portraits, cocktail hour, dinner, sunset and reception transitions.",relatedSlugs:["portland-wedding-planning-checklist","portland-wedding-first-look-guide","portland-wedding-vendor-meals-guide"],sections:[
      {heading:"Anchor the immovable moments first",paragraphs:["Start with ceremony time, venue access, required end time and any meal-service commitments. Those anchors reveal how much flexible time actually exists."]},
      {heading:"Transitions are part of the timeline",paragraphs:["Getting dressed, moving people, loading transportation and gathering family for photos all consume time. A schedule feels calmer when movement is planned rather than treated as instant."]},
      {heading:"Use daylight intentionally",paragraphs:["Portrait timing should reflect season, venue orientation and the photographer's plan. Sunset can be a useful creative anchor, but it should not derail dinner or leave guests waiting."]},
      {heading:"Protect the guest experience",paragraphs:["Long unexplained gaps are more noticeable to guests than a five-minute shift behind the scenes. Cocktail hour, food, drinks, seating and entertainment can bridge necessary photo or room-reset time."]},
      {heading:"Give the timeline room to recover",paragraphs:["A useful schedule has small pockets of flexibility. The goal is not to predict every minute; it is to prevent one late transition from pushing the entire reception off course."]}
    ],checklist:["Confirm venue access and end time","Set ceremony time","Map travel and room transitions","Coordinate portrait windows","Confirm catering service timing","Plan vendor meals","Share one final timeline"],faq:[
      {question:"How detailed should a wedding timeline be?",answer:"Detailed enough that vendors know where they need to be and when, without scripting every guest interaction or creating unnecessary minute-by-minute pressure."},
      {question:"Who should create the final wedding timeline?",answer:"The couple can begin it, but the planner or coordinator and key vendors should review the portions that affect their work before it is finalized."}
    ]
  },
  {
    slug:"portland-wedding-ceremony-audio-guide",category:"DJs",title:"Portland Wedding Ceremony Audio: Microphones, Music and the Details Guests Notice",dek:"Make vows easy to hear and ceremony music feel intentional by planning sound around the space, guest count and weather.",readTime:"9 min read",seoTitle:"Portland Wedding Ceremony Audio & Microphone Guide",seoDescription:"Plan Portland wedding ceremony sound with microphones, speakers, music cues, outdoor conditions and backup considerations.",relatedSlugs:["how-to-choose-portland-wedding-dj","portland-wedding-ceremony-guide","portland-wedding-rain-plan-guide"],sections:[
      {heading:"Hearing the vows matters more than seeing another speaker",paragraphs:["Good ceremony audio should disappear into the experience. The goal is clear speech throughout the seating area without equipment dominating the visual setting."]},
      {heading:"Outdoor ceremonies change the sound problem",paragraphs:["Wind, distance, nearby traffic and open space can make voices disappear quickly. Ask who provides amplification and whether the planned system fits the ceremony location."]},
      {heading:"Decide who needs a microphone",paragraphs:["The officiant may be able to share coverage with the couple, or separate microphones may be preferable. The right setup depends on ceremony format and the audio professional's equipment."]},
      {heading:"Music cues need one clear owner",paragraphs:["Processional, entrance, signing and recessional cues should be written down and assigned to the person actually controlling playback. Confirm exact song versions when multiple edits exist."]},
      {heading:"Have a practical backup",paragraphs:["Wireless systems depend on batteries, signal and equipment. Ask the audio provider what backup exists if a microphone or playback source fails."]}
    ],checklist:["Confirm audio provider","Walk ceremony speaker placement","Confirm microphone plan","List music cues and exact versions","Discuss wind/weather","Confirm power access","Ask about backup equipment"],faq:[
      {question:"Do small weddings need ceremony microphones?",answer:"Sometimes. Guest count is only one factor; distance, wind, acoustics and the ceremony space can matter just as much."},
      {question:"Can a playlist replace a ceremony DJ?",answer:"It can in some settings, but someone still needs responsibility for equipment, levels, cues and troubleshooting."}
    ]
  },
  {
    slug:"portland-wedding-tent-rain-structure-guide",category:"Rentals",title:"Wedding Tents and Rain Structures in Portland: What to Plan Before the Forecast",dek:"Treat weather cover as an event space with flooring, power, lighting and guest-flow needs—not simply a roof ordered at the last minute.",readTime:"10 min read",seoTitle:"Portland Wedding Tent & Rain Structure Guide",seoDescription:"Plan a Portland wedding tent or rain structure with guidance on site fit, flooring, lighting, power, sides, guest flow and weather backups.",relatedSlugs:["portland-wedding-rain-plan-guide","portland-wedding-rentals-guide","outdoor-wedding-venues-portland-guide"],sections:[
      {heading:"Start with the site, not the tent catalog",paragraphs:["Available footprint, surface, slope, access and venue rules determine what can realistically be installed. Confirm the site's requirements before choosing a structure."]},
      {heading:"A roof does not solve the ground",paragraphs:["Rain can affect grass, walkways and service paths even when guests stay dry overhead. Flooring or protected circulation may matter as much as the tent itself."]},
      {heading:"Sides change comfort and airflow",paragraphs:["Sidewalls can block wind and rain, but enclosure also changes ventilation and temperature. Ask the rental professional how the structure is configured for the season."]},
      {heading:"Lighting and power belong in the same plan",paragraphs:["Once a reception moves under cover, lighting, catering, music and heating may all depend on power. Map those needs before installation day."]},
      {heading:"Know when the weather decision gets made",paragraphs:["Couples should know the cancellation, installation and decision deadlines tied to weather equipment. A clear trigger prevents stressful last-minute improvisation."]}
    ],checklist:["Confirm usable footprint","Review venue installation rules","Plan flooring and walkways","Discuss sidewalls","Map lighting and power","Confirm heating rules if relevant","Know weather decision deadline"],faq:[
      {question:"Can we wait for the wedding-week forecast to rent a tent?",answer:"That can be risky because inventory, installation schedules and venue requirements may limit last-minute options. Ask rental providers about reservation and decision deadlines early."},
      {question:"Does a tent automatically make an outdoor wedding weatherproof?",answer:"No. Ground conditions, wind, temperature, access, drainage and covered transitions still need consideration."}
    ]
  },
  {
    slug:"portland-wedding-dietary-allergy-catering-guide",category:"Catering",title:"Wedding Dietary Needs and Allergies: A Better Way to Plan the Menu",dek:"Collect useful guest information, separate preferences from allergies and create a clear handoff to your Portland caterer.",readTime:"9 min read",seoTitle:"Portland Wedding Dietary & Allergy Catering Guide",seoDescription:"Plan wedding dietary needs and food allergies with better RSVP questions, caterer communication, meal identification and service planning.",relatedSlugs:["portland-wedding-catering-guide","portland-wedding-vendor-meals-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"Ask guests for information you can actually use",paragraphs:["An open-ended RSVP field can produce vague answers. Ask guests to identify dietary restrictions or allergies clearly, then let the caterer determine what accommodations are possible."]},
      {heading:"Separate preference from medical risk",paragraphs:["A dislike, dietary choice and serious allergy are not interchangeable. Accurate language helps the catering team evaluate preparation and cross-contact concerns."]},
      {heading:"Do not promise what the kitchen has not confirmed",paragraphs:["Couples should pass guest needs to the caterer and communicate only accommodations the caterer can actually provide. Complex allergies may require direct clarification."]},
      {heading:"Make the service plan visible to staff",paragraphs:["Place cards, seating charts or service notes can help identify special meals when the caterer recommends them. The method should fit the service style."]},
      {heading:"Reconfirm before final counts",paragraphs:["Review the dietary list with the caterer when final attendance is known so late RSVP changes do not disappear between spreadsheets."]}
    ],checklist:["Collect restrictions with RSVPs","Distinguish allergies from preferences","Send consolidated list to caterer","Confirm available accommodations","Choose meal-identification method","Reconfirm at final count"],faq:[
      {question:"Should guests list food allergies on the RSVP?",answer:"A clear dietary-needs field can help couples gather information, but the caterer should determine what accommodations and cross-contact controls are feasible."},
      {question:"Should couples guarantee an allergen-free meal?",answer:"Only communicate guarantees the food provider has explicitly confirmed. Preparation environments and cross-contact controls vary."}
    ]
  },
  {
    slug:"portland-wedding-buffet-plated-family-style-guide",category:"Catering",title:"Buffet vs. Plated vs. Family-Style Wedding Dinner: How to Choose",dek:"Compare service styles by guest flow, staffing, table space, timing and the atmosphere you want—not by a single idea of what feels formal.",readTime:"10 min read",seoTitle:"Buffet vs Plated vs Family Style Wedding Dinner | Portland",seoDescription:"Compare buffet, plated and family-style wedding dinners for Portland weddings by timing, staffing, guest flow, table space and experience.",relatedSlugs:["portland-wedding-catering-guide","portland-wedding-seating-chart-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"Start with the experience you want at dinner",paragraphs:["Plated service keeps guests seated, buffet service creates movement, and family-style service creates interaction at the table. None is automatically better for every wedding."]},
      {heading:"Guest count changes the mechanics",paragraphs:["A service style that moves smoothly for a smaller room can create lines or long service windows at a larger reception. Ask the caterer how they would serve your actual count and floor plan."]},
      {heading:"Table design matters for family style",paragraphs:["Platters need usable table space alongside florals, candles, glassware and place settings. Design and catering teams should coordinate before tables are finalized."]},
      {heading:"Buffets need a traffic plan",paragraphs:["Buffet location, number of service points and table-release strategy affect how long guests wait. The floor plan should make movement intuitive."]},
      {heading:"Compare complete proposals",paragraphs:["Food price alone does not capture staffing, rentals, china, bussing or service duration. Compare what each proposal includes before deciding which format fits the budget."]}
    ],checklist:["Choose desired dinner atmosphere","Ask service time for guest count","Review staffing","Check table-space needs","Map buffet traffic if applicable","Compare rentals and service inclusions"],faq:[
      {question:"Is a buffet always less expensive than plated dinner?",answer:"Not necessarily. Menu, staffing, rentals, service length and venue logistics all affect the total. Compare complete catering proposals."},
      {question:"Is family-style service good for long tables?",answer:"It can be, but platter space and passing logistics should be reviewed with the caterer and rental or design team."}
    ]
  },
  {
    slug:"portland-engagement-photo-guide",category:"Photography",title:"Portland Engagement Photos: Make the Session Feel Like You",dek:"Choose a setting, time and pace that gives your photographer room to create images that feel connected to your actual relationship.",readTime:"9 min read",seoTitle:"Portland Engagement Photo Guide: Locations, Timing & Style",seoDescription:"Plan Portland engagement photos with guidance on location style, timing, weather, outfits, permits and creating a comfortable session.",relatedSlugs:["how-to-choose-portland-wedding-photographer","portland-wedding-photographer-cost-guide","portland-wedding-first-look-guide"],sections:[
      {heading:"Choose a setting with a reason behind it",paragraphs:["A neighborhood, trail, coffee stop, waterfront or architectural setting can work when it reflects the couple or the visual story they want. A famous location is not automatically the best fit."]},
      {heading:"Let light and crowds shape the time",paragraphs:["Your photographer can recommend timing based on season, location orientation and the look you want. Popular public spaces may also be easier at quieter hours."]},
      {heading:"Wear clothes you can move in",paragraphs:["Outfits should support the setting and allow natural movement. Coordinated does not need to mean matching. Bring layers when Portland weather makes them useful."]},
      {heading:"Build in a weather alternative",paragraphs:["Light rain can be visually interesting, but heavy weather may change the plan. Decide in advance whether you would reschedule, move under cover or embrace the conditions."]},
      {heading:"Use the session as a rehearsal for being photographed",paragraphs:["The value is not only the final gallery. An engagement session can help the couple learn how their photographer directs, communicates and handles movement before the wedding day."]}
    ],checklist:["Choose meaningful setting","Ask photographer about best light","Check access or permit rules","Plan comfortable outfits","Choose weather backup","Allow travel and parking time"],faq:[
      {question:"When should we take engagement photos in Portland?",answer:"There is no single best month. Choose timing based on the visual setting, weather tolerance, photographer availability and when you need the images."},
      {question:"Do engagement photo locations require permits?",answer:"Some locations may. Check the property or managing agency's current photography and permit rules before the session."}
    ]
  },
  {
    slug:"portland-wedding-family-photo-list-guide",category:"Photography",title:"Wedding Family Photo Lists: Get the Important Groups Without Losing Cocktail Hour",dek:"Create a short, deliberate portrait list and organize people before the wedding so formal photos move quickly.",readTime:"8 min read",seoTitle:"Wedding Family Photo List Guide | Portland Photography",seoDescription:"Build a practical wedding family photo list with group priorities, sensitive family dynamics, helpers and efficient portrait timing.",relatedSlugs:["how-to-choose-portland-wedding-photographer","portland-wedding-day-timeline-guide","photography-planning-checklist"],sections:[
      {heading:"List combinations, not every possible relationship",paragraphs:["Formal portrait time expands quickly when every variation is added. Prioritize the combinations you will actually value and let candid coverage capture the rest of the family story."]},
      {heading:"Tell the photographer about family dynamics privately",paragraphs:["Divorce, estrangement, mobility needs or sensitive relationships can affect grouping order. A quiet heads-up helps avoid uncomfortable surprises."]},
      {heading:"Put larger groups first",paragraphs:["When practical, photograph the largest or hardest-to-gather groups before releasing people. The photographer may recommend a different order based on location and timeline."]},
      {heading:"Assign a person who knows the family",paragraphs:["A photographer may not know Aunt Maria from Cousin Sam. A helper from each side can gather the next group while the current portrait is being made."]},
      {heading:"Keep the list readable",paragraphs:["Use names and relationships rather than vague labels. Share the final list in the format your photographer requests instead of handing over a new version on the wedding morning."]}
    ],checklist:["Choose must-have groups","Use names and relationships","Flag sensitive dynamics","Note mobility needs","Assign family helpers","Send final list before wedding"],faq:[
      {question:"How many family photo combinations should we have?",answer:"There is no ideal number. Ask your photographer how much time your specific list will require and prioritize the groups that matter most."},
      {question:"Should we give the photographer a giant shot list?",answer:"A focused family-group list is useful. For general moments and creative images, discuss priorities and trust the coverage approach you hired them for."}
    ]
  },
  {
    slug:"portland-wedding-ceremony-music-guide",category:"DJs",title:"Wedding Ceremony Music: Build a Soundtrack With Better Transitions",dek:"Choose processional and recessional music around the ceremony's pacing, entrances and emotional arc rather than filling a generic song checklist.",readTime:"8 min read",seoTitle:"Portland Wedding Ceremony Music Guide",seoDescription:"Plan wedding ceremony music for processionals, entrances, transitions and recessional cues with a practical Portland wedding guide.",relatedSlugs:["portland-wedding-ceremony-audio-guide","how-to-choose-portland-wedding-dj","portland-wedding-ceremony-guide"],sections:[
      {heading:"Map the entrances before choosing every song",paragraphs:["Know who is walking, in what order and from how far away. The physical procession determines how much music is actually needed."]},
      {heading:"One song can carry more than one group",paragraphs:["Separate songs for every entrance can create abrupt transitions. Sometimes one piece for multiple groups produces a smoother ceremony."]},
      {heading:"Choose exact versions",paragraphs:["Live, acoustic, radio and instrumental versions can have different lengths and openings. Give the person controlling music the exact recording or arrangement."]},
      {heading:"Plan the ending of each cue",paragraphs:["A skilled DJ or musician can fade, resolve or time a piece around the final walker. Discuss how transitions will be handled rather than assuming tracks will end naturally."]},
      {heading:"Let the recessional change the energy",paragraphs:["The recessional is often the first celebratory release after the ceremony. Choose something that supports the transition into congratulations and cocktail hour."]}
    ],checklist:["Map processional order","Estimate walking distance","Choose exact song versions","Assign each cue","Discuss fades and transitions","Confirm recessional","Share final cue sheet"],faq:[
      {question:"How many ceremony songs do we need?",answer:"It depends on the number of entrances, ceremony elements and whether one song will cover multiple groups. Start with the procession map."},
      {question:"Can our DJ edit ceremony songs?",answer:"Many can manage fades and cue points, but capabilities vary. Ask the specific DJ or musician how they handle ceremony transitions."}
    ]
  },
  {
    slug:"portland-wedding-rsvp-wording-guide",category:"Stationery",title:"Wedding RSVP Wording That Gets You the Information You Actually Need",dek:"Design the response around decisions your venue, caterer and seating plan require, while keeping the guest experience simple.",readTime:"8 min read",seoTitle:"Wedding RSVP Wording Guide | Portland Invitations",seoDescription:"Plan clear wedding RSVP wording for attendance, meal choices, dietary needs, plus-ones and deadlines without overloading guests.",relatedSlugs:["wedding-invitation-stationery-timeline-guide","portland-wedding-save-the-date-guide","portland-wedding-seating-chart-guide"],sections:[
      {heading:"Start with the decisions the RSVP must support",paragraphs:["Attendance is only the beginning. Meal selection, dietary needs, named guests and attendance at related events may affect final planning. Ask only for information you will use."]},
      {heading:"Make the deadline unmistakable",paragraphs:["The RSVP date should leave enough time for follow-up and the venue or caterer's final-count deadline. Work backward from contractual dates rather than choosing a round number."]},
      {heading:"Clarify exactly who is invited",paragraphs:["Addressing, online RSVP settings and response wording should work together so guests understand whether a partner, children or additional guest is included."]},
      {heading:"Keep dietary questions clear",paragraphs:["Ask for dietary restrictions or allergies in language that gives the caterer useful information. Avoid promising accommodations before the caterer confirms them."]},
      {heading:"Plan the follow-up before invitations go out",paragraphs:["Some guests will miss the deadline. Decide who will contact nonresponders and how quickly you need answers to protect the final-count schedule."]}
    ],checklist:["Confirm final-count deadline","Set RSVP deadline","Define invited names","Add meal choices if needed","Collect dietary needs","Test online form","Plan nonresponder follow-up"],faq:[
      {question:"How should we choose an RSVP deadline?",answer:"Start with the venue and caterer's final-count deadlines, then leave enough time to contact guests who have not responded."},
      {question:"Should we ask guests for song requests on the RSVP?",answer:"You can if it is useful to you, but keep optional questions from distracting from attendance, meal and dietary information you actually need."}
    ]
  },
  {
    slug:"portland-wedding-dress-alterations-guide",category:"Bridal",title:"Wedding Dress Alterations: What to Plan Between Purchase and Wedding Day",dek:"Treat alterations as part of the attire timeline, with room for fittings, shoes, undergarments and final adjustments.",readTime:"9 min read",seoTitle:"Portland Wedding Dress Alterations Guide",seoDescription:"Plan wedding dress alterations in Portland with guidance on fittings, shoes, undergarments, bustle decisions and final pickup timing.",relatedSlugs:["portland-wedding-dress-shopping-guide","portland-wedding-day-emergency-kit-guide","portland-bridal-hair-makeup-guide"],sections:[
      {heading:"The purchased dress is the starting point",paragraphs:["Even a dress ordered in the correct size may need hemming, bodice adjustments or other fit work. Include alterations in both the attire budget and schedule."]},
      {heading:"Bring the pieces that affect fit",paragraphs:["Shoes, undergarments and shapewear can change hem length and how the dress sits. Ask the alterations professional what to bring to each fitting."]},
      {heading:"Decide bustle needs with the actual train",paragraphs:["A bustle should support movement after the ceremony while working with the dress construction. Learn how yours fastens and have someone else practice it."]},
      {heading:"Do not schedule the final fitting too casually",paragraphs:["The alterations professional will recommend timing based on the work required. Leave room for final adjustments rather than assuming one fitting will finish everything."]},
      {heading:"Plan transport and storage after pickup",paragraphs:["Ask how the finished dress should be hung, steamed or transported, especially if the wedding venue or lodging requires travel."]}
    ],checklist:["Budget for alterations","Choose alteration professional","Bring wedding shoes","Bring planned undergarments","Confirm bustle","Teach bustle helper","Plan final pickup and transport"],faq:[
      {question:"When should wedding dress alterations start?",answer:"Timing depends on the dress, scope of work and alterations professional. Ask early enough to reserve fittings and follow their recommended schedule."},
      {question:"Should I bring my wedding shoes to fittings?",answer:"Usually yes when hem length is being set. Confirm with the person doing the alterations."}
    ]
  },
  {
    slug:"portland-wedding-ring-care-sizing-guide",category:"Jewelry",title:"Wedding Ring Sizing and Care: Small Details to Handle Before the Ceremony",dek:"Confirm fit, cleaning, insurance questions and ring-handling logistics before the rings become part of the wedding-day timeline.",readTime:"8 min read",seoTitle:"Wedding Ring Sizing & Care Guide | Portland",seoDescription:"Prepare wedding rings for the ceremony with practical guidance on sizing, cleaning, insurance questions, storage and wedding-day handling.",relatedSlugs:["portland-wedding-ring-jewelry-guide","portland-wedding-ceremony-guide","portland-wedding-day-emergency-kit-guide"],sections:[
      {heading:"Confirm fit before the final week",paragraphs:["Finger size can fluctuate, but a ring that is consistently uncomfortable or insecure deserves attention before the ceremony. Ask a qualified jeweler to evaluate fit."]},
      {heading:"Know how the materials should be cared for",paragraphs:["Metals, stones and settings do not all tolerate the same cleaning methods. Follow care guidance appropriate to the actual ring rather than a generic household trick."]},
      {heading:"Ask about insurance before assuming coverage",paragraphs:["Couples who want jewelry coverage should review their insurer's requirements and limits. Keep receipts or appraisals if requested by the insurer."]},
      {heading:"Choose one secure wedding-day handoff",paragraphs:["Decide who receives the rings, when they receive them and how they are carried. Avoid unnecessary transfers between getting-ready locations and ceremony spaces."]},
      {heading:"Build maintenance into ownership",paragraphs:["A jeweler can advise on inspection frequency for prongs, settings and wear based on the ring. Long-term care is easier when the couple knows what the piece requires."]}
    ],checklist:["Check fit","Ask jeweler about care","Keep purchase/appraisal records","Review insurance if desired","Choose ring holder","Confirm ceremony handoff"],faq:[
      {question:"How tight should a wedding ring fit?",answer:"Fit depends on finger shape and ring design. A qualified jeweler can evaluate whether the ring is secure and comfortable."},
      {question:"Can every wedding ring be cleaned the same way?",answer:"No. Cleaning methods vary by metal, gemstone and setting, so follow guidance for the specific piece."}
    ]
  },
  {
    slug:"portland-wedding-bar-last-call-guide",category:"Mobile Bars",title:"Wedding Bar Timing: Cocktail Hour, Dinner, Last Call and the Flow Between Them",dek:"Plan bar service as part of the reception timeline so guests know where to go and service changes do not create surprise lines.",readTime:"9 min read",seoTitle:"Portland Wedding Bar Timing & Last Call Guide",seoDescription:"Plan Portland wedding bar timing around cocktail hour, dinner, speeches, last call, transportation and venue requirements.",relatedSlugs:["portland-wedding-mobile-bar-guide","portland-wedding-cocktail-hour-guide","portland-wedding-transportation-guide"],sections:[
      {heading:"Bar timing starts before cocktail hour",paragraphs:["Confirm when service can legally and contractually begin, when staff arrive and whether setup affects the ceremony or guest arrival path."]},
      {heading:"Cocktail hour creates the first demand spike",paragraphs:["Many guests reach the bar at nearly the same time. Number of service points, menu complexity and staffing can influence how quickly the line moves."]},
      {heading:"Decide what happens during dinner",paragraphs:["Some receptions keep the main bar open, shift to table wine, pause service or use another approach. Coordinate the choice with catering and the reception timeline."]},
      {heading:"Last call should support the exit plan",paragraphs:["Venue rules, licensed service requirements and transportation timing can all affect when the bar closes. The DJ or coordinator can help communicate the transition if appropriate."]},
      {heading:"Nonalcoholic service deserves equal planning",paragraphs:["Water and appealing nonalcoholic choices should remain easy to access throughout the event, especially as dancing and transportation begin."]}
    ],checklist:["Confirm service window","Plan cocktail-hour capacity","Coordinate dinner service","Confirm last-call rules","Keep water accessible","Plan nonalcoholic options","Align transportation timing"],faq:[
      {question:"When should a wedding bar close?",answer:"Follow the venue, caterer or licensed bar provider's requirements and coordinate the service end with the event timeline and transportation plan."},
      {question:"Should the bar stay open during dinner?",answer:"There is no universal rule. Ask how each option affects staffing, guest movement, meal service and your venue layout."}
    ]
  },
  {
    slug:"portland-wedding-hotel-welcome-bag-guide",category:"Lodging",title:"Portland Wedding Welcome Bags: Useful Guest Help Without Filling Them With Stuff",dek:"Build a compact welcome bag around arrival, hydration, local context and the information traveling guests actually need.",readTime:"8 min read",seoTitle:"Portland Wedding Welcome Bag Guide",seoDescription:"Create useful Portland wedding welcome bags with guest information, local touches, delivery planning and practical essentials.",relatedSlugs:["portland-wedding-hotel-block-guide","portland-wedding-welcome-party-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"Start with what a traveler needs on arrival",paragraphs:["A welcome bag is most useful when it solves small travel problems: clear weekend information, water or snacks, and a sense of where the guest is."]},
      {heading:"Use Portland touches selectively",paragraphs:["A locally made snack, coffee-related item or neighborhood recommendation can create place without turning the bag into a souvenir basket. Choose items guests can realistically use."]},
      {heading:"Put changing information online",paragraphs:["Printed schedules are easy to read but hard to update. Use the wedding website for information likely to change and keep printed material focused on the essentials."]},
      {heading:"Confirm hotel delivery rules",paragraphs:["Hotels vary in whether they distribute bags at check-in, deliver to rooms or charge handling fees. Ask before assembling quantities."]},
      {heading:"Do not let the bag become a second favor project",paragraphs:["The goal is hospitality, not volume. A few useful items presented cleanly can feel more intentional than a bag full of filler."]}
    ],checklist:["Confirm hotel distribution policy","Count expected rooms","Create concise weekend card","Choose useful snack or drink","Add local touch if desired","Link changing details online","Plan delivery time"],faq:[
      {question:"Do wedding guests expect welcome bags?",answer:"No. They are optional. Clear travel and event information matters more than providing gifts."},
      {question:"Should every guest receive a bag?",answer:"Couples often plan by room or household, but the right quantity depends on the contents and hotel distribution plan."}
    ]
  },
  {
    slug:"portland-wedding-catering-tasting-guide",category:"Catering",title:"Wedding Catering Tastings: What to Learn Before You Finalize the Menu",dek:"Use the tasting to evaluate more than flavor—service, portions, presentation, dietary needs and the decisions that affect the full reception.",readTime:"9 min read",seoTitle:"Portland Wedding Catering Tasting Guide",seoDescription:"Prepare for a Portland wedding catering tasting with practical questions about menu choices, service, dietary needs, portions and final decisions.",relatedSlugs:["portland-wedding-catering-guide","portland-wedding-dietary-allergy-catering-guide","portland-wedding-buffet-plated-family-style-guide"],sections:[
      {heading:"Know what the tasting is designed to answer",paragraphs:["Some tastings compare menu options while others confirm an already selected direction. Ask what is included so you arrive with the right decisions in mind."]},
      {heading:"Evaluate the plate as part of the event",paragraphs:["Flavor matters, but so do portion, temperature, presentation and how the dish will be produced for the full guest count. Ask what may differ at event scale."]},
      {heading:"Bring dietary needs into the conversation",paragraphs:["If important guests need accommodations, use the tasting process to understand what alternatives are available and how they will be identified during service."]},
      {heading:"Discuss service while the menu is concrete",paragraphs:["Once you can see the food, it is easier to ask about plating, buffet replenishment, family-style portions, clearing and the timing between courses."]},
      {heading:"Leave with documented decisions",paragraphs:["Write down approved dishes, substitutions and open questions. The final contract or banquet documentation should reflect what the catering team has actually agreed to provide."]}
    ],checklist:["Confirm tasting format","Review menu choices","Discuss portion and presentation","Ask about dietary alternatives","Review service timing","Document approved changes"],faq:[
      {question:"When should we schedule a wedding catering tasting?",answer:"The caterer should advise based on its booking and menu process. Ask when the tasting will be most useful for making final decisions."},
      {question:"Should we bring family to the tasting?",answer:"Only if their input is genuinely needed and the caterer allows additional attendees. Too many opinions can make a focused decision harder."}
    ]
  },
  {
    slug:"portland-wedding-floral-repurpose-guide",category:"Florists",title:"Wedding Flower Repurposing: Move Arrangements Without Making the Day Feel Like a Moving Crew",dek:"Reuse ceremony flowers thoughtfully by planning placement, labor, timing and scale with the florist before the wedding day.",readTime:"9 min read",seoTitle:"Portland Wedding Flower Repurposing Guide",seoDescription:"Learn how to repurpose Portland wedding flowers from ceremony to reception with practical planning for labor, timing, scale and placement.",relatedSlugs:["portland-wedding-flower-cost-guide","portland-wedding-flower-season-guide","portland-wedding-cocktail-hour-guide"],sections:[
      {heading:"Design for the second location from the beginning",paragraphs:["An arrangement that looks balanced on a ceremony structure may feel awkward on a small table. Tell the florist where pieces may move before the design is finalized."]},
      {heading:"Someone has to move everything",paragraphs:["Repurposing requires labor during a narrow transition window. Confirm whether the florist, planner, venue team or another approved person is responsible."]},
      {heading:"Prioritize the pieces guests will notice",paragraphs:["Large arrangements, aisle flowers or statement pieces may have useful second lives at an escort display, bar or reception focal point when scale works."]},
      {heading:"Do not compromise the ceremony teardown",paragraphs:["Venue turnover rules and photography timing may limit what can remain in place. Build the transfer into the actual room-flip plan."]},
      {heading:"Compare repurposing with simpler design",paragraphs:["Moving flowers is not automatically cheaper once labor and mechanics are considered. Ask the florist which approach makes sense for the design and budget."]}
    ],checklist:["Identify movable arrangements","Choose second locations","Confirm scale works","Assign transfer responsibility","Check venue turnover rules","Confirm labor or fees"],faq:[
      {question:"Can ceremony flowers become centerpieces?",answer:"Sometimes, but dimensions, mechanics and vase style need to work in both settings. Ask the florist to design with repurposing in mind."},
      {question:"Does repurposing flowers always save money?",answer:"No. Labor, installation and design mechanics can affect the total, so compare the complete approach with your florist."}
    ]
  },
  {
    slug:"portland-wedding-bouquet-guide",category:"Florists",title:"Wedding Bouquets: Size, Shape, Season and How the Flowers Fit the Whole Look",dek:"Choose bouquet direction by considering attire, photography, season and the floral story across the wedding rather than copying a single inspiration photo.",readTime:"9 min read",seoTitle:"Portland Wedding Bouquet Guide: Size, Shape & Season",seoDescription:"Plan a Portland wedding bouquet with guidance on scale, shape, seasonal availability, attire, photography and floral priorities.",relatedSlugs:["portland-wedding-flower-cost-guide","portland-wedding-flower-season-guide","portland-wedding-dress-shopping-guide"],sections:[
      {heading:"Scale the bouquet to the person and attire",paragraphs:["Bouquet size changes how the dress or suit reads in photographs. Share attire images with the florist so shape and scale support rather than overwhelm the overall look."]},
      {heading:"Use inspiration for direction, not duplication",paragraphs:["Flower availability, season and color variation make exact replication unrealistic. Identify what you love about an image—movement, palette, texture or shape."]},
      {heading:"Decide where specialty flowers matter most",paragraphs:["If a particular bloom is expensive or limited, the bouquet may be a high-impact place to use it while other arrangements rely on supporting flowers and foliage."]},
      {heading:"Think about the bouquet in photographs",paragraphs:["The bouquet appears in portraits, ceremony images and detail photographs. Discuss how it will sit naturally in the hand and whether any trailing elements affect movement."]},
      {heading:"Plan what happens after the ceremony",paragraphs:["Decide where bouquets rest during dinner, whether they will be displayed and what preservation or take-home plan exists if that matters to you."]}
    ],checklist:["Share attire images","Choose shape direction","Discuss seasonal flexibility","Identify priority flowers","Plan bouquet handoff","Choose post-ceremony location"],faq:[
      {question:"Do wedding bouquets have to match centerpieces?",answer:"No. They can share palette, texture or flower families without being identical."},
      {question:"Can a florist guarantee a specific flower variety?",answer:"Availability can vary. Ask how the florist handles substitutions while preserving the intended color, texture and overall design."}
    ]
  },
  {
    slug:"portland-wedding-dj-do-not-play-guide",category:"DJs",title:"Wedding DJ Do-Not-Play Lists: Protect the Vibe Without Programming Every Song",dek:"Give your DJ useful boundaries, must-plays and context while leaving enough flexibility to read the room.",readTime:"8 min read",seoTitle:"Wedding DJ Do-Not-Play List Guide | Portland",seoDescription:"Build a useful wedding DJ do-not-play list with must-plays, boundaries, guest requests and enough flexibility for a responsive dance floor.",relatedSlugs:["how-to-choose-portland-wedding-dj","portland-wedding-ceremony-music-guide","portland-wedding-cocktail-hour-guide"],sections:[
      {heading:"Separate true no-go songs from simple preferences",paragraphs:["A short list of songs or artists you genuinely do not want is easier to honor than hundreds of tracks you merely would not choose yourself."]},
      {heading:"Tell the DJ why a boundary matters when useful",paragraphs:["A song tied to a difficult memory or a genre that changes the desired atmosphere deserves different treatment from a casual dislike. Context helps the DJ understand the priority."]},
      {heading:"Use must-plays sparingly too",paragraphs:["A handful of meaningful songs can anchor the night. An enormous required playlist may leave little room for the DJ to respond to guests."]},
      {heading:"Decide how guest requests should work",paragraphs:["Tell the DJ whether requests are welcome, filtered through your preferences or largely ignored. This prevents a well-meaning guest from redirecting the reception."]},
      {heading:"Trust the professional you selected",paragraphs:["The planning conversation should establish taste and boundaries. During the reception, a strong DJ can then adjust pacing and song selection to the room."]}
    ],checklist:["List true do-not-plays","Choose a few must-plays","Describe desired genres","Discuss guest requests","Flag meaningful boundaries","Share final list before wedding"],faq:[
      {question:"How long should a do-not-play list be?",answer:"There is no fixed number, but a focused list of real boundaries is generally more useful than cataloging every song you do not love."},
      {question:"Should we let guests request songs?",answer:"That is a preference to discuss with your DJ. Requests can be accepted selectively while still respecting your music direction."}
    ]
  },
  {
    slug:"portland-wedding-first-dance-guide",category:"DJs",title:"Your First Dance: Song Length, Floor Placement and Making the Moment Feel Natural",dek:"Plan the first dance around comfort, room flow and the reception timeline instead of worrying about performing for the room.",readTime:"8 min read",seoTitle:"Portland Wedding First Dance Guide",seoDescription:"Plan a comfortable wedding first dance with guidance on song length, DJ edits, dance-floor placement, photography and reception timing.",relatedSlugs:["how-to-choose-portland-wedding-dj","portland-wedding-day-timeline-guide","portland-wedding-ceremony-music-guide"],sections:[
      {heading:"Choose a song for meaning before choreography",paragraphs:["A song you both enjoy can carry the moment without an elaborate routine. If the full track feels long, ask the DJ whether a natural edit is possible."]},
      {heading:"Decide where the dance fits in the reception",paragraphs:["Some couples dance immediately on entering while others wait until after dinner or toasts. Each choice changes guest attention and the transition into open dancing."]},
      {heading:"Check the actual floor",paragraphs:["Practice expectations should match the floor size, surface and attire. A move that works in a studio may feel different in formal clothing on the venue's dance floor."]},
      {heading:"Give photography room to work",paragraphs:["Lighting, guests standing at the edge and DJ equipment can affect images. Your photographer and DJ can coordinate placement when the floor plan is being finalized."]},
      {heading:"Know how the moment ends",paragraphs:["A clean transition into parent dances, dinner, an invitation for guests to join or open dancing keeps the room from wondering what happens next."]}
    ],checklist:["Choose song","Discuss edit if desired","Choose reception timing","Check floor size","Practice in appropriate shoes","Plan transition after dance"],faq:[
      {question:"Does a first dance need to use the full song?",answer:"No. If you prefer a shorter moment, ask your DJ about an edit that preserves a natural beginning and ending."},
      {question:"Do we need dance lessons?",answer:"No. Lessons are optional and can be useful if they would make you more comfortable or if you want planned choreography."}
    ]
  },
  {
    slug:"portland-wedding-hair-makeup-trial-guide",category:"Hair & Makeup",title:"Wedding Hair and Makeup Trials: How to Make the Appointment Actually Useful",dek:"Bring the right references, test the complete look and leave the trial with clear notes for the wedding morning.",readTime:"9 min read",seoTitle:"Portland Wedding Hair & Makeup Trial Guide",seoDescription:"Prepare for a Portland bridal hair and makeup trial with guidance on references, accessories, skin prep, timing and documenting the final look.",relatedSlugs:["portland-bridal-hair-makeup-guide","portland-wedding-dress-shopping-guide","portland-wedding-day-timeline-guide"],sections:[
      {heading:"Bring references that explain what you like",paragraphs:["A few focused images are more useful than a giant board of unrelated looks. Point out the specific finish, shape, texture or detail you want to explore."]},
      {heading:"Wear or bring the details that change the look",paragraphs:["Veils, hair accessories, extensions or statement jewelry can affect balance. Ask the artist what should come to the trial."]},
      {heading:"Evaluate the look in different light",paragraphs:["Check the result in natural light as well as indoor light when possible. Take photographs from several angles so you can evaluate how it reads beyond the mirror."]},
      {heading:"Speak up while adjustments are easy",paragraphs:["A trial is designed for refinement. Specific feedback about coverage, lashes, lip color, volume or placement gives the artist something actionable."]},
      {heading:"Document the final version",paragraphs:["Once the look is right, confirm products or notes the artist wants recorded and whether any skin, hair or timing preparation is needed before the wedding."]}
    ],checklist:["Choose focused references","Bring accessories if requested","Discuss skin/hair considerations","Photograph finished look","Request adjustments","Confirm wedding-day prep"],faq:[
      {question:"Do I need a wedding hair and makeup trial?",answer:"It is optional, but a trial can reduce uncertainty and create time to refine the look before the wedding day."},
      {question:"Should I wear white to the trial?",answer:"It is not required. Some people find a neckline or color similar to their wedding attire helpful for visual context."}
    ]
  },
  {
    slug:"portland-wedding-getting-ready-guide",category:"Planning",title:"Getting Ready on the Wedding Morning: Build a Space and Schedule That Stay Calm",dek:"Plan hair, makeup, clothing, food, photography and room organization so the first hours of the wedding support the rest of the day.",readTime:"10 min read",seoTitle:"Portland Wedding Getting Ready Guide",seoDescription:"Plan a calm Portland wedding morning with hair and makeup timing, food, room setup, photography, clothing and transportation logistics.",relatedSlugs:["portland-wedding-day-timeline-guide","portland-bridal-hair-makeup-guide","portland-wedding-day-emergency-kit-guide"],sections:[
      {heading:"Choose the room for function as well as photos",paragraphs:["Natural light is useful, but so are outlets, mirrors, seating, climate control and enough space for the people actually getting ready."]},
      {heading:"Hair and makeup create the morning clock",paragraphs:["Service count, number of artists and desired finish time determine the start. Build the schedule from the team's realistic service timing rather than a guess."]},
      {heading:"Feed people before the ceremony",paragraphs:["Easy food and water help keep the room functional without risking clothing or slowing services. Assign someone other than the person getting married to manage delivery."]},
      {heading:"Keep photography details together",paragraphs:["Rings, stationery, shoes, jewelry and other meaningful items are easier to photograph when gathered before the photographer arrives."]},
      {heading:"Plan the room exit",paragraphs:["Know who packs personal belongings, who carries ceremony items and how everyone gets to the next location. A clean departure prevents small objects from becoming emergencies."]}
    ],checklist:["Confirm room access time","Count beauty services","Plan food and water","Gather photo details","Steam attire in advance","Assign cleanup/packing","Confirm transportation departure"],faq:[
      {question:"How early should getting ready start?",answer:"Work backward from the required ready time using the hair and makeup team's service estimates, photography needs and transportation time."},
      {question:"Who should be in the getting-ready room?",answer:"Invite the people who contribute to the experience without making the room too crowded for beauty services, dressing and photography."}
    ]
  },
  {
    slug:"portland-wedding-signage-guide",category:"Stationery",title:"Wedding Signage: What Guests Need to Know and What You Can Skip",dek:"Use signs to solve navigation and information problems, then let the venue, people and design do the rest.",readTime:"8 min read",seoTitle:"Portland Wedding Signage Guide: What You Actually Need",seoDescription:"Plan useful Portland wedding signage for arrival, seating, bar, guest book and directions without cluttering the venue.",relatedSlugs:["wedding-invitation-stationery-timeline-guide","portland-wedding-seating-chart-guide","portland-wedding-guest-experience-guide"],sections:[
      {heading:"Start with guest decisions",paragraphs:["A sign earns its place when it helps a guest know where to go, where to sit or what to do. Decorative signs are optional, not a planning requirement."]},
      {heading:"Prioritize arrival and wayfinding",paragraphs:["Large properties, multiple buildings or hidden ceremony spaces may need directional signs more than a compact venue with obvious flow. Walk the guest route before ordering."]},
      {heading:"Make seating information readable",paragraphs:["Escort displays and seating charts need enough scale and contrast for guests to find names without creating a bottleneck. Alphabetical organization can help larger lists."]},
      {heading:"Do not repeat information everywhere",paragraphs:["If the bar menu is visible at the bar, it may not need another sign at cocktail hour. Consolidating messages keeps the visual environment cleaner."]},
      {heading:"Assign installation and removal",paragraphs:["Confirm who brings, places and retrieves every sign and stand. Venue access and cleanup deadlines should be part of the plan."]}
    ],checklist:["Walk guest arrival route","Identify true wayfinding needs","Choose seating display","Confirm readable sizes","Coordinate sign stands","Assign setup","Assign removal"],faq:[
      {question:"What wedding signs are essential?",answer:"That depends on the venue. Focus first on signs that solve navigation, seating or service questions guests would otherwise need to ask."},
      {question:"Do we need a welcome sign?",answer:"No. It can be a design element, but it is not required if arrival is already obvious and well managed."}
    ]
  },
  {
    slug:"portland-wedding-invitation-postage-guide",category:"Stationery",title:"Wedding Invitation Postage: Weigh the Finished Suite Before You Buy Stamps",dek:"Avoid assumptions about postage by assembling the real invitation, checking dimensions and confirming current mailing requirements.",readTime:"8 min read",seoTitle:"Wedding Invitation Postage Guide | Portland",seoDescription:"Plan wedding invitation postage by weighing the finished suite, checking size and shape, testing envelopes and confirming current USPS requirements.",relatedSlugs:["wedding-invitation-stationery-timeline-guide","portland-wedding-rsvp-wording-guide","portland-wedding-save-the-date-guide"],sections:[
      {heading:"The finished invitation determines postage",paragraphs:["Paper stock, inserts, envelope thickness and embellishments can change weight and machinability. Test the assembled suite rather than estimating from a single card."]},
      {heading:"Shape and thickness matter too",paragraphs:["Unusual dimensions, rigid elements or bulky closures can affect how mail is processed. Current postal requirements should be checked before stamps are purchased."]},
      {heading:"Take a sample to the post office",paragraphs:["A completed invitation can be weighed and evaluated before you commit to postage for the entire mailing. This is especially useful for layered or nonstandard suites."]},
      {heading:"Protect the response method",paragraphs:["If using mailed RSVP cards, confirm return postage and addressing. If using online RSVPs, test the printed URL or QR destination before production."]},
      {heading:"Build mailing time into the stationery plan",paragraphs:["Assembly, addressing and postal delivery all take time. Work backward from the RSVP deadline and vendor final-count requirements."]}
    ],checklist:["Assemble complete invitation","Check dimensions","Weigh sample","Confirm current postal requirements","Test RSVP method","Purchase correct postage","Plan mailing date"],faq:[
      {question:"How much postage does a wedding invitation need?",answer:"It depends on the finished suite's weight, dimensions, thickness and other mailing characteristics. Verify the assembled invitation with USPS before purchasing postage."},
      {question:"Should we hand-cancel wedding invitations?",answer:"Ask USPS about current options and whether they are appropriate for your specific mailing. Do not rely on old wedding-mailing advice without verification."}
    ]
  },
  {
    slug:"portland-wedding-photo-booth-prop-guide",category:"Photo Booths",title:"Wedding Photo Booth Props and Backdrops: Make Them Fit the Wedding Instead of a Party Store",dek:"Create a booth that feels integrated with the reception through better backdrop, lighting, prop and placement choices.",readTime:"8 min read",seoTitle:"Portland Wedding Photo Booth Backdrop & Props Guide",seoDescription:"Plan a Portland wedding photo booth with better backdrop, prop, lighting, placement and guest-flow decisions.",relatedSlugs:["portland-wedding-photo-booth-guide","portland-wedding-guest-experience-guide","portland-wedding-lighting-guide"],sections:[
      {heading:"Start with the backdrop, not the props",paragraphs:["The backdrop appears in every image and has more visual impact than a basket of accessories. Coordinate it with the room and booth framing."]},
      {heading:"Use fewer props with more personality",paragraphs:["A small collection tied to the couple or event can feel more intentional than generic signs and novelty items. Props are optional if the booth experience works without them."]},
      {heading:"Lighting determines image quality",paragraphs:["Ask the booth provider how faces are lit and how the setup handles the venue's ambient lighting. Decorative lighting alone may not be enough for flattering images."]},
      {heading:"Placement affects participation",paragraphs:["A booth near reception activity is easier to discover, but it should not block the dance floor, bar line or catering paths."]},
      {heading:"Decide what guests receive",paragraphs:["Prints, digital delivery, galleries and guest-book copies create different experiences. Confirm the output and any privacy settings before the wedding."]}
    ],checklist:["Choose backdrop direction","Review booth framing","Select props if desired","Check lighting","Choose visible placement","Confirm print/digital delivery","Review gallery settings"],faq:[
      {question:"Do wedding photo booths need props?",answer:"No. Strong lighting, a good backdrop and an easy guest experience can work without props."},
      {question:"Where should a photo booth go?",answer:"Place it where guests can discover it without interfering with major traffic paths, dinner service or the dance floor."}
    ]
  },
  {
    slug:"portland-wedding-content-creator-shot-guide",category:"Content Creation",title:"Wedding Content Creator Shot Priorities: Capture the Energy Without Recreating the Photographer's Job",dek:"Define what fast-turnaround phone content should add to the wedding while keeping professional photo and video coverage unobstructed.",readTime:"9 min read",seoTitle:"Portland Wedding Content Creator Shot Guide",seoDescription:"Plan wedding content creator priorities with behind-the-scenes moments, vertical video, vendor coordination and boundaries with photo and video teams.",relatedSlugs:["portland-wedding-content-creator-guide","portland-wedding-videography-photography-team-guide","portland-wedding-day-timeline-guide"],sections:[
      {heading:"Define what content creation adds",paragraphs:["Fast-turnaround vertical clips, behind-the-scenes moments and informal reactions can complement professional coverage when the role is clearly defined."]},
      {heading:"Prioritize moments suited to a phone-first perspective",paragraphs:["Room reveals, outfit details, candid preparation and quick guest reactions can work well without asking the creator to reproduce every formal portrait."]},
      {heading:"Protect professional camera positions",paragraphs:["The photographer and videographer should not have key moments blocked by another device. Share vendor information and establish movement expectations before the wedding."]},
      {heading:"Decide what can be posted and when",paragraphs:["Some couples want immediate sharing while others prefer privacy until they have seen professional previews. Put expectations in writing."]},
      {heading:"Keep the shot priorities short",paragraphs:["A content creator can respond more naturally when the list identifies a few important themes rather than scripting hundreds of clips."]}
    ],checklist:["Define creator role","Choose priority moments","Connect photo/video teams","Discuss ceremony positioning","Set posting permissions","Confirm delivery timing"],faq:[
      {question:"Does a wedding content creator replace a videographer?",answer:"They are different services. Content creators commonly focus on quick, phone-first social content while videographers may provide professionally captured and edited films."},
      {question:"Should the photographer know we hired a content creator?",answer:"Yes. Vendor coordination helps establish positions and avoid obstructing key moments."}
    ]
  },
  {
    slug:"portland-wedding-live-band-guide",category:"Live Entertainment",title:"Hiring a Live Wedding Band in Portland: Space, Sound, Breaks and Reception Flow",dek:"Plan live music around the room, power, performance schedule and guest experience so the band feels built into the reception.",readTime:"10 min read",seoTitle:"Portland Live Wedding Band Guide",seoDescription:"Hire and plan a Portland wedding band with guidance on stage space, sound, power, breaks, song requests and reception timing.",relatedSlugs:["portland-wedding-live-music-guide","portland-wedding-ceremony-audio-guide","portland-wedding-first-dance-guide"],sections:[
      {heading:"Confirm the band's physical footprint",paragraphs:["Musicians, instruments, speakers and stands require more room than the visible performance line suggests. Get stage or floor-space requirements before finalizing the reception layout."]},
      {heading:"Power and sound rules can shape the setup",paragraphs:["Ask the venue about electrical access and sound restrictions, then share that information with the band before the wedding."]},
      {heading:"Understand performance sets and breaks",paragraphs:["Live bands typically structure the night in sets. Ask how breaks are covered and coordinate those periods with dinner, speeches or recorded music."]},
      {heading:"Discuss key songs early",paragraphs:["If a first dance or other song must be performed live, confirm whether it is already in the repertoire, can be learned, or should use a recording."]},
      {heading:"Build the timeline with the bandleader",paragraphs:["Introductions, dances, toasts and open dancing all interact with performance timing. Give the bandleader the same final timeline used by the planner and other reception vendors."]}
    ],checklist:["Confirm band footprint","Review power needs","Check sound restrictions","Understand set schedule","Confirm key songs","Plan break music","Share final timeline"],faq:[
      {question:"Do live wedding bands take breaks?",answer:"Many do. Ask the specific band how sets and breaks are structured and what music is provided between sets."},
      {question:"Can a wedding band learn our first-dance song?",answer:"Possibly. Ask early about repertoire, arrangement needs, learning fees or deadlines."}
    ]
  },
  {
    slug:"portland-wedding-honeymoon-departure-guide",category:"Honeymoons",title:"Leaving for the Honeymoon After the Wedding: Build a Departure That Does Not Add Stress",dek:"Choose when to leave based on travel logistics, recovery time, documents and the wedding cleanup that still has to happen.",readTime:"8 min read",seoTitle:"Wedding-to-Honeymoon Departure Guide | Portland",seoDescription:"Plan the transition from a Portland wedding to your honeymoon with practical guidance on departure timing, documents, packing and post-wedding responsibilities.",relatedSlugs:["portland-wedding-honeymoon-planning-guide","portland-wedding-day-timeline-guide","wedding-week-checklist"],sections:[
      {heading:"You do not have to leave the next morning",paragraphs:["An immediate departure can feel exciting, but a buffer day may reduce pressure after a late reception. Choose based on flight timing, energy and responsibilities."]},
      {heading:"Separate honeymoon packing from wedding packing",paragraphs:["Pack travel documents, medication and core honeymoon items before the wedding weekend so they do not get mixed with décor, gifts or attire."]},
      {heading:"Assign post-wedding responsibilities",paragraphs:["Rental returns, décor pickup, gifts and leftover items still need owners if the couple leaves town quickly. Confirm those handoffs before the reception."]},
      {heading:"Protect important documents",paragraphs:["Verify current passport, identification and destination entry requirements well before travel. Keep critical documents separate from wedding-day bags."]},
      {heading:"Build recovery into the plan",paragraphs:["Travel is part of the experience. A schedule with enough sleep, food and transfer time can make the first honeymoon day feel like a beginning rather than another deadline."]}
    ],checklist:["Choose departure day","Verify travel documents","Pack honeymoon separately","Assign rental/decor returns","Secure gifts/cards","Confirm airport transportation","Leave recovery time"],faq:[
      {question:"Should we leave for our honeymoon the day after the wedding?",answer:"Only if that timing works for your travel and energy. Many couples benefit from a buffer, while others prefer to depart immediately."},
      {question:"Who handles wedding items if we leave town?",answer:"Assign trusted people or vendors specific responsibilities for rentals, décor, gifts and personal items before the wedding."}
    ]
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
