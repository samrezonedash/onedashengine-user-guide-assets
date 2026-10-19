/* guide-articles-3.jsx
   Product Guide / Monitor + Reports + Add-ons + Models
*/

window.GUIDE_ARTICLES_3 = [
  // ─────────────────────────────────────────────────────────
  {
    id: "financial-outcomes",
    category: "monitor",
    title: "Financial Outcomes",
    desc: "Track financial ROI for the care gaps you've worked.",
    updated: "Nov 19, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to Financial Outcomes",
        body: (
          <>
            <p><strong>This is where you can view financial return on investment for your worked care gaps.</strong></p>
            <Hint type="info" title="There are two financial outcomes sections">
              <p><strong>Pre/Post Intervention Financial Outcomes.</strong> View the change before and after your clinical intervention.</p>
              <p><strong>General Financial Trends.</strong> View general financial trends on a selected population.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "prepost",
        title: "Pre/Post Intervention",
        body: (
          <>
            <p>Use this section to see how working your care gaps has changed financial outcomes for the population.</p>
            <h3>Select a population</h3>
            <ul>
              <li><strong>Rule.</strong> Includes all patients that had a care gap generated from that rule. Outcomes are shown before and after the date the gap was generated.</li>
              <li><strong>Plan.</strong> Includes all patients in the plan. The plan start date is the one selected for the population or per-patient (see <strong>My Population</strong>).</li>
            </ul>
            <h3>Select the time period</h3>
            <ul>
              <li><strong>Months for PMPM.</strong> Number of months of data to include in the PMPM calculation.</li>
            </ul>
            <p>Once selected, click <strong>Apply filters</strong>.</p>
            <h3>Tables and graphs</h3>
            <DataTable
              headers={["Table / Graph", "Description", "Tips"]}
              rows={[
                ["Pharmacy Pre/Post Plan", "Cumulative pharmacy spend before and after the intervention start date.", "Cumulative spend changes based on Months for PMPM."],
                ["Medical Pre/Post Plan", "Cumulative medical spend before and after the intervention start date.", "Cumulative spend changes based on Months for PMPM."],
                ["PMPM (Total Patients in Plan)", "Pharmacy and medical pre/post PMPM based on total patients in the plan.", "Shows the change in spend for patients included in this analysis."],
                ["PMPM (Total Covered Lives)", "Pharmacy and medical pre/post PMPM based on total covered lives in the health plan.", "A true PMPM calculation showing impact across all covered lives."],
                ["Avg Pharmacy Spend by Demographic", "Calculated average pharmacy spend per demographic cohort, pre and post.", "Uses data from the specified Months for PMPM."],
                ["Avg Medical Spend by Demographic", "Calculated average medical spend per demographic cohort, pre and post.", "Uses data from the specified Months for PMPM."],
              ]}
            />
          </>
        ),
      },
      {
        id: "trends",
        title: "General Financial Trends",
        body: (
          <>
            <p>Use this section to select a tag/patient cohort and view financial trends on patients within the tag.</p>
            <h3>Selections</h3>
            <ul>
              <li><strong>Tag.</strong> Select a tag for analysis.</li>
              <li><strong>Date range.</strong> Start and end date for the spend data.</li>
            </ul>
            <DataTable
              headers={["Table / Graph", "Description", "Tips"]}
              rows={[
                ["Current Patients on Tag", "Number of patients in the selected tag.", ""],
                ["Pharmacy Total Spend", "Total and average pharmacy spend per patient within the date range.", "Adjusting the date range will change results."],
                ["Medical Total Spend", "Total and average medical spend per patient within the date range.", "Adjusting the date range will change results."],
                ["Total Spend", "Combined total and average spend per patient within the date range.", "Adjusting the date range will change results."],
                ["Avg Spend by Demographic", "Average spend across pharmacy, medical, and total by demographic group.", "Remember — this is an average, not a sum."],
              ]}
            />
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "clinical-outcomes",
    category: "monitor",
    title: "Clinical Outcomes",
    desc: "Track clinical ROI for your clinical program interventions.",
    updated: "Nov 19, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to Clinical Outcomes",
        body: (
          <>
            <p><strong>This is where you can view clinical return on investment for your clinical program interventions.</strong></p>
            <Hint type="info" title="There are two clinical outcomes sections">
              <p><strong>Pre/Post Intervention.</strong> View the change before and after your intervention.</p>
              <p><strong>General Clinical Trends.</strong> View clinical trends on a selected population.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "prepost",
        title: "Pre/Post Intervention",
        body: (
          <>
            <p>Use this section to see how clinical program interventions affect clinical outcomes.</p>
            <h3>Select a population</h3>
            <ul>
              <li><strong>Rule.</strong> All patients with a care gap from the selected rule. The plan start date becomes the date the gap was generated.</li>
              <li><strong>Plan.</strong> All patients in the plan. The plan start date is the one selected for the population or per-patient.</li>
            </ul>
            <h3>Time period</h3>
            <ul>
              <li><strong>Pre/Post # of Months.</strong> Number of months before and after the start date. Default is 6 months pre/post.</li>
            </ul>
            <h3>Focus in (optional)</h3>
            <ul>
              <li><strong>Patient is taking (GPI).</strong> Narrow analysis to specific drugs.</li>
              <li><strong>Patient is NOT taking (GPI).</strong> Exclude specific drugs from analysis.</li>
            </ul>
            <Hint type="success">
              <p>Adherence per patient is calculated based on time of first fill of the medication (in historical records) to the time/date shown.</p>
            </Hint>
            <Hint type="warning">
              <p>If GPI filters are used, calculations are based only on the medications selected — or exclude specified medications.</p>
            </Hint>
            <h3>Tables and graphs</h3>
            <DataTable
              headers={["Table / Graph", "Description"]}
              rows={[
                ["Medication Adherence", "Average adherence before and after intervention. Pre = adherence the month before day zero. Post = adherence in the last month of the selected pre/post window."],
                ["Patients above 80% adherence", "Number of patients above 80% adherence before and after intervention."],
                ["ED visits / Hospital admissions", "Sum of ED visits and hospital visits in the selected pre/post window."],
                ["Average adherence by month", "Average adherence across all patients per month. If the graph bottoms out, post months may be in the future with no data yet."],
                ["Average adherence by demographic", "Per-demographic average adherence before and after intervention."],
                ["ED/Hospital visits by demographic", "Sum of ED/hospital visits per demographic before and after."],
                ["Expenditure by member", "Table of all patients in the cohort. Click a member ID to enter that patient's profile."],
              ]}
            />
          </>
        ),
      },
      {
        id: "trends",
        title: "General Clinical Trends",
        body: (
          <>
            <p>Use this section to select a tag/patient cohort and view clinical trends on patients within the tag.</p>
            <h3>Selections</h3>
            <ul>
              <li><strong>Tag.</strong> Select a tag for analysis.</li>
              <li><strong>Date range.</strong> Start and end date for the analysis.</li>
              <li><strong>Patient is taking (GPI).</strong> Optional drug filter.</li>
              <li><strong>Patient is NOT taking (GPI).</strong> Optional exclusion filter.</li>
            </ul>
            <Hint type="success">
              <p>Adherence per patient is calculated based on time of first fill (in historical records) to the date/time shown.</p>
            </Hint>
            <DataTable
              headers={["Table / Graph", "Description"]}
              rows={[
                ["Average Adherence", "Average adherence for the patients selected. Based on date range and GPI filters."],
                ["Patients above 80% adherence", "Count includes only those at 80% adherence on the last day of the selected date range."],
                ["ED Visits / Hospital Admissions", "Sum for selected patients within the date range."],
                ["Average Adherence by Month", "Average per month within the date range, calculated using all historical medication data."],
                ["Prescription fill locations", "Heat map of fill locations within the selected date range."],
                ["Demographic Data", "Statistics by age and gender. Average adherence is on the last day of the selected range."],
                ["Member Data", "Member-specific data for every patient in the analysis. Downloadable as CSV."],
              ]}
            />
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "quality-outcomes",
    category: "monitor",
    title: "Quality Outcomes",
    desc: "Real-time, daily insight on Stars and HEDIS progress.",
    updated: "Nov 19, 2025",
    sections: [
      {
        id: "intro",
        title: "Insight on your quality measures",
        body: (
          <>
            <p>High-level, real-time, population insights on the progress of your quality measures.</p>
            <AdherenceTrendMock />
          </>
        ),
      },
      {
        id: "adherence",
        title: "Adherence measures (DM / RAS / Statin)",
        body: (
          <>
            <p>On entry, data loads for all Medicare lines of business (LOB). To change the LOB selection, use the top select boxes and click <strong>Apply</strong> to reload.</p>
            <h3>Adherence trend graphs</h3>
            <p>A high-level overview of your population around a specific adherence measure.</p>
            <ul>
              <li><strong>All Eligible Members.</strong> Average PDC for all members in the denominator of the Star measure.</li>
              <li><strong>All Intervened DM Members.</strong> Average PDC for all members for which OneDash has identified care gaps.</li>
              <li><strong>DM Members with PDC ≥ 80%.</strong> Calculated % of those with adherence above 80% over the whole eligible population — your prediction of where your Star rating is.</li>
              <li><strong>Interventions per month.</strong> Bar graph overlaid on the PDC data showing how many care gaps were identified per month.</li>
            </ul>
            <h3>Conversion graphs</h3>
            <ul>
              <li><strong>DM Conversion Count.</strong> Year-to-date count of how many times a member flipped from &lt;80% PDC to ≥80% PDC, broken up by month.</li>
              <li><strong>DM Successful Action.</strong> Count of successful actions (faxes, calls, etc.) you've made each month.</li>
            </ul>
            <Hint type="warning" title="Target population">
              <p>For details on who to target to improve your measure, download <strong>"Number of members who can still meet ≥90% adherence from total population."</strong> This gives you a targeted list of who can still be flipped and what actions need to be taken at what times.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "supd",
        title: "SUPD",
        body: (
          <>
            <p>Insights on how many of your population are meeting the Statin measure and have started a statin in the measurement year.</p>
            <h3>SUPD trends</h3>
            <ul>
              <li><strong>SUPD Eligible Members Trend Line.</strong> Calculated SUPD score based on how many eligible members have started a statin in the measurement year.</li>
              <li><strong>Interventions per month.</strong> Number of SUPD gaps raised in OneDash per month.</li>
            </ul>
            <h3>SUPD conversions</h3>
            <ul>
              <li><strong>SUPD Conversion Sum.</strong> Year-to-month-end sum of total members that have received a statin this measurement year.</li>
              <li><strong>SUPD Conversion Count.</strong> Monthly count of members that have started a statin each month.</li>
              <li><strong>SUPD Successful Actions by Month.</strong> Number of successful actions focused on closing the SUPD gap each month.</li>
            </ul>
            <Hint type="danger">
              <p>If a member fills a statin and that statin is subsequently reversed, final month-end counts will <strong>not</strong> decrement. The final month-end count always includes every new statin fill on the eligible denominator. To catch reversals and help members complete pickup, use our rules library.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "poly-ach",
        title: "Poly-ACH and COB",
        body: (
          <>
            <p>Insights on number of overlap days and who is near the edge of moving into the numerator. Use the Overlap Trends graph to find members who need to be actioned to prevent them from entering the Star measure numerator.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "quality-outcomes-1.png"}
              alt="COB Overlap Trends — stacked bar chart by month showing members with 1-10, 11-20, 21-29, and 30+ days of overlap."
              caption="Example of an overlap trends graph. Members in the 21–29 day band are your most actionable population — close them before they cross into the measure numerator."
            />
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "care-gap-statistics",
    category: "monitor",
    title: "Care Gap Statistics",
    desc: "Generate reports on actions and interventions taken.",
    updated: "Aug 22, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to Care Gap Statistics",
        body: <p><strong>This is where you can generate reports on actions and interventions taken.</strong> The page presents information in three main sections.</p>,
      },
      {
        id: "summary",
        title: "Section 1 · Care Gap Status Summary (by owner)",
        body: <p>View a high-level summary of all care gaps associated with any owner selected from the dropdown. Defaults to <strong>Entire Organization</strong>.</p>,
      },
      {
        id: "filters",
        title: "Section 2 · Filters",
        body: (
          <>
            <p>Filters let you pull reports on only the care gaps of interest. Filter by:</p>
            <ul>
              <li>Date(s) the care gaps were initially created</li>
              <li>Who completed the care gap</li>
              <li>All care gaps generated by rules in a rule category</li>
              <li>All care gaps with the same recommended intervention</li>
              <li>Actions completed within a care gap (multi-select)</li>
              <li>The status of care gaps (multi-select)</li>
              <li>The outcomes of care gaps</li>
            </ul>
          </>
        ),
      },
      {
        id: "table",
        title: "Section 3 · Care Gap Statistics Table",
        body: (
          <>
            <p>As you select your filters, the table updates to reflect your selection. The table shows all care gaps that meet your filters, including:</p>
            <ul>
              <li>The date the care gap was created</li>
              <li>The owner</li>
              <li>The patient name and ID</li>
              <li>The category of the rule the gap was generated from</li>
              <li>The recommended care gap</li>
              <li>The current status</li>
              <li>The total number of actions recorded for that gap</li>
              <li>Whether the intervention was successful or unsuccessful (open gaps show N/A)</li>
            </ul>
            <p>View care gap details by clicking the eye button under View. This is a read-only window — nothing can be changed from this page.</p>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "reports",
    category: "monitor",
    title: "Reports",
    desc: "Download any custom-requested report as CSV.",
    updated: "Jan 23, 2026",
    sections: [
      {
        id: "intro",
        title: "Reports overview",
        body: (
          <>
            <p>The Reports page lets you download any custom requested report. Reports are organized by categories across the top of the page. Click a category to see the reports available.</p>
            <ReportRowsMock />
          </>
        ),
      },
      {
        id: "how-to",
        title: "Using the page",
        body: (
          <div className="g-cards">
            <div className="g-card">
              <IconBadge src={(window.UG_ASSET_BASE || "") + "reports-3.png"} alt="Run and Download" size={64} bg="#FFF" />
              <h4 className="g-card__title">Run and Download</h4>
              <p className="g-card__body">Click <strong>Run and Download</strong> to download a report directly. Reports download as CSV files.</p>
            </div>
            <div className="g-card">
              <IconBadge src={(window.UG_ASSET_BASE || "") + "reports-2.png"} alt="Download Information" size={64} bg="#FFF" />
              <h4 className="g-card__title">Download Information</h4>
              <p className="g-card__body">Hover the info icon to see who downloaded the report last, when, and how many times it's been run.</p>
            </div>
            <div className="g-card">
              <IconBadge src={(window.UG_ASSET_BASE || "") + "reports-1.png"} alt="Request a new report" size={64} bg="#FFF" />
              <h4 className="g-card__title">New Reports</h4>
              <p className="g-card__body">Don't see what you need? Click <strong>Request a new report</strong>. We ask for a 1-month lead time but will provide it sooner when possible.</p>
            </div>
          </div>
        ),
      },
      {
        id: "input",
        title: "User input",
        body: (
          <Hint type="warning">
            <p>If user input is required to download a report, it'll be requested via a pop-up modal when you click <strong>Run and Download</strong>.</p>
          </Hint>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Models — the adherence risk models. One overview article that
  // carries everything the three models share, plus a page per model
  // for the figures that differ. The per-model pages deliberately
  // don't repeat the PDC definition or the input list; they link back.
  {
    id: "adherence-models",
    category: "models",
    title: "Adherence Risk Models",
    desc: "How OneDash forecasts year-end medication adherence — what the models look at, how accurate they are, and how far to trust a score.",
    updated: "Oct 19, 2026",
    sections: [
      {
        id: "what-they-do",
        title: "What these models do",
        body: (
          <>
            <p><strong>OneDash runs three machine-learning models that estimate, every day, each member's chance of finishing the year below the medication adherence standard for a given drug class.</strong> One model per class: statins, RAS (blood pressure), and diabetes medication.</p>
            <p>The point of them is timing. By late in the year, a member's adherence outcome is effectively settled — days already missed can't be covered retroactively. These models exist to flag who is drifting while outreach can still change the result.</p>
            <Hint type="info" title="Nothing new is collected to run them">
              <p>Every input comes from claims, pharmacy, and enrollment data OneDash already holds. The models don't survey members, don't use anything self-reported, and don't look at behavior outside of medication fills and care utilization.</p>
            </Hint>
            <h3>The three models</h3>
            <DataTable
              headers={["Model", "Medication class", "Status", "Validated against"]}
              rows={[
                [<a href="#/article/model-statin"><strong>Statin Adherence Model</strong></a>, "Statins (cholesterol)", "Trained and validated", "4,437 held-out 2025 members"],
                [<a href="#/article/model-ras"><strong>RAS Adherence Model</strong></a>, "RAS (blood pressure)", "Trained and validated", "3,500+ held-out 2025 members"],
                [<a href="#/article/model-dm"><strong>DM Adherence Model</strong></a>, "Diabetes medication", "Trained and validated", "1,660 held-out 2025 members"],
              ]}
            />
            <p>All three cover the same population — Medicare members aged 40 to 90 — and all three refresh daily. Everything on this page is true of all three; the numbers that differ live on the individual model pages.</p>
          </>
        ),
      },
      {
        id: "pdc",
        title: "What “nonadherent” means",
        body: (
          <>
            <p><strong>PDC — Proportion of Days Covered</strong> — is the share of days in the year a member actually had their medication on hand, counted from pharmacy fills. Medicare uses it to score Part D adherence for Star Ratings. At year end, a member at <strong>80% or above</strong> counts as adherent; below 80% counts as nonadherent.</p>
            <Hint type="success" title="The models forecast the official measure — they don't replace it">
              <p>There is no OneDash-specific definition of adherence at work here. The models predict the same PDC calculation CMS will score, before the year is over. For the underlying terms, see <a href="#/article/definitions/onedash-terms">Definitions</a> — PDC, Best End-of-Year PDC, and Worst End-of-Year PDC.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "how-it-works",
        title: "How the models work",
        body: (
          <>
            <Steps>
              <Step title="Track">Every eligible member's medication pickups are tracked day by day, all year, alongside their broader health and pharmacy history.</Step>
              <Step title="Compare">That pattern so far is compared against thousands of real members from the prior year whose year-end PDC is already known.</Step>
              <Step title="Score">The model returns one number per member — the estimated chance of finishing the year below 80% PDC.</Step>
            </Steps>
            <p>Each model was trained on real 2025 outcomes, then tested against members kept out of training entirely. That matters for how you read the accuracy figures on the model pages: they describe how the model behaves on members it has never seen, not how well it fits data it already knew.</p>
          </>
        ),
      },
      {
        id: "inputs",
        title: "What the models look at",
        body: (
          <>
            <p>Five categories of information feed every one of the three models. None of it is speculative — all of it comes from claims, pharmacy, and enrollment data already on file.</p>
            <div className="g-cards">
              <div className="g-card">
                <IconBadge icon="fa-solid fa-prescription-bottle" size={40} />
                <h4 className="g-card__title">Adherence track record</h4>
                <ul style={{ margin: 0, fontSize: 13.5 }}>
                  <li>Current-year pickup pattern so far</li>
                  <li>Best case and worst case for where they could still end up this year</li>
                  <li>Last year's final result</li>
                </ul>
              </div>
              <div className="g-card">
                <IconBadge icon="fa-solid fa-hourglass-half" size={40} />
                <h4 className="g-card__title">Time in treatment</h4>
                <ul style={{ margin: 0, fontSize: 13.5 }}>
                  <li>How many weeks since they started this medication this year</li>
                </ul>
              </div>
              <div className="g-card">
                <IconBadge icon="fa-solid fa-notes-medical" size={40} />
                <h4 className="g-card__title">Health background</h4>
                <ul style={{ margin: 0, fontSize: 13.5 }}>
                  <li>Other chronic conditions (diabetes, heart disease)</li>
                  <li>History of depression</li>
                  <li>History of substance use</li>
                  <li>Dementia medication use</li>
                  <li>Takes 5+ medications</li>
                </ul>
              </div>
              <div className="g-card">
                <IconBadge icon="fa-solid fa-hospital" size={40} />
                <h4 className="g-card__title">Care patterns</h4>
                <ul style={{ margin: 0, fontSize: 13.5 }}>
                  <li>Recent hospital admissions</li>
                  <li>ER visits</li>
                  <li>Doctor visits</li>
                  <li>Mail-order pharmacy use</li>
                </ul>
              </div>
              <div className="g-card">
                <IconBadge icon="fa-solid fa-user" size={40} />
                <h4 className="g-card__title">Basic info</h4>
                <ul style={{ margin: 0, fontSize: 13.5 }}>
                  <li>Age</li>
                  <li>Gender</li>
                </ul>
              </div>
            </div>
            <p>Every model sees all five categories. What differs between them is how much weight each one carries — each model page ranks its own factors under <strong>What drives the score</strong>.</p>
          </>
        ),
      },
      {
        id: "reading-a-score",
        title: "How to read a score",
        body: (
          <>
            <p>A score is a probability, not a verdict — and for a risk model like this, “accuracy” isn't a right-or-wrong count. The measure that matters is <strong>ranking</strong>: given two members, how often does the model correctly identify which one is more likely to end up nonadherent? That's the figure quoted on every model page.</p>
            <h3>Confidence builds over the year</h3>
            <DataTable
              headers={["Where the member is", "How well the model ranks", "What to do with it"]}
              rows={[
                ["First ~3 months on therapy", "About 6 to 7 in 10", "Treat as a weak signal. There isn't enough fill history yet to separate members — don't prioritize outreach on the score alone."],
                ["After ~3 months on therapy", "About 8 to 9 in 10", "Reliable. This is the window where the score earns its keep — on-track members separate clearly from drifting ones."],
                ["Averaged across the whole year", "About 87 to 90 in 100", "Flattering. The whole-year average is pulled up by late-year members whose outcome is already all but decided."],
              ]}
            />
            <Hint type="warning" title="Early therapy is a limit of the data, not a tuning problem">
              <p>In a member's first few weeks on a medication there simply isn't enough history for anyone — model or human — to tell much apart. All three models show this independently, each on its own data. More tuning doesn't fix it; time on therapy does.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "calibration",
        title: "How far to trust the number itself",
        body: (
          <>
            <p>Ranking members well and producing a trustworthy percentage are two different things, and here the three models genuinely differ. This is the one place you can't generalize from one model to another.</p>
            <DataTable
              headers={["Model", "Calibration", "What that means in practice"]}
              rows={[
                ["Statin", "Conservative at the top of the scale", "Its riskiest group averaged about 58% predicted risk but actually ended up nonadherent about 83% of the time. True risk at the top may run higher than displayed. The low-to-mid range tracks closely."],
                ["RAS", "Tracks real outcomes", "A batch of members scored around 30% did end up nonadherent at close to that rate. The percentages can be read at face value."],
                ["DM", "Overconfident through most of the range", "Members scored 30–40% ended up nonadherent only about 15–20% of the time. Only near the very top of the scale (~80% predicted) does the number line up with reality."],
              ]}
            />
            <Hint type="warning" title="Scores are not interchangeable between models">
              <p>A 40% statin score and a 40% DM score do not describe the same real-world risk. Compare members <em>within</em> a model, not across models, and don't carry a numeric cutoff from one class to another.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "open-items",
        title: "Open items",
        body: (
          <>
            <p>These apply to all three models. They're program decisions and known gaps, not defects in the modeling:</p>
            <ul>
              <li><strong>No outreach threshold has been set.</strong> Where to draw the line between “flag for outreach” and “leave alone” depends on care management's actual capacity, which is a business decision rather than a modeling one. The models produce a score; nothing acts on it automatically.</li>
              <li><strong>No care gap exclusion is applied.</strong> A member already flagged with an active care gap in that drug class is scored exactly like anyone else, so a high score and an open gap can describe the same member twice.</li>
              <li><strong>The age-40 floor hasn't been separately validated for statins or diabetes medication.</strong> The 40–90 population was carried over from the RAS model. Statin and DM candidates can plausibly skew younger, and because those training runs were themselves filtered to age 40 and up, they can't settle the question either.</li>
            </ul>
          </>
        ),
      },
      {
        id: "questions",
        title: "Common questions",
        body: (
          <>
            <h3>Why is this member scored high when they look fine clinically?</h3>
            <p>Because the dominant input is what the member has actually done this year, not who they are on paper. Across all three models, the current-year pickup pattern carries more weight than every demographic and health-history factor combined. A member can be clinically stable and still be behind on pickups.</p>
            <h3>Why did a score change since yesterday?</h3>
            <p>The models refresh daily. Every new fill — and every day that passes without one — moves the current-year pickup pattern, the best-case ceiling, and the worst-case floor, which together are the heaviest inputs in all three models.</p>
            <h3>The member just started this medication. Why is the score what it is?</h3>
            <p>Early in therapy there isn't enough history to rank members reliably — see <a href="#/article/adherence-models/reading-a-score">How to read a score</a>. Scores still appear in the first few months, but they shouldn't drive prioritization on their own until roughly the three-month mark.</p>
            <h3>Does the model use race, income, or neighborhood data?</h3>
            <p>No. The inputs are exactly the five categories listed under <a href="#/article/adherence-models/inputs">What the models look at</a>, and the only demographic inputs among them are age and gender.</p>
            <h3>Can I see why one specific member scored the way they did?</h3>
            <p>The factor rankings on each model page describe what drives scores across the whole population, not a per-member breakdown. If you need the reasoning behind an individual score — for an audit, an appeal, or a clinical review — raise it through <a href="#/article/support/contact">Support</a>.</p>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "model-statin",
    category: "models",
    title: "Statin Adherence Model",
    desc: "The statin (cholesterol) adherence risk model — its drivers, accuracy, and calibration.",
    updated: "Oct 19, 2026",
    sections: [
      {
        id: "at-a-glance",
        title: "At a glance",
        body: (
          <>
            <Hint type="info" title="Read the shared explainer first">
              <p>What the score means, what the model looks at, and how to read it are the same across all three models and live in <a href="#/article/adherence-models">Adherence Risk Models</a>. This page covers only what's specific to statins.</p>
            </Hint>
            <ul>
              <li><strong>Medication class.</strong> Statin (cholesterol).</li>
              <li><strong>Population.</strong> Medicare members, age 40–90.</li>
              <li><strong>Refresh.</strong> Daily.</li>
              <li><strong>Status.</strong> Trained and validated on real 2025 statin PDC outcomes.</li>
              <li><strong>Held-out test set.</strong> 4,437 members the model never saw during training.</li>
              <li><strong>Background nonadherence rate.</strong> 16% of the population.</li>
            </ul>
            <h3>Against the obvious benchmarks</h3>
            <DataTable
              headers={["Measure", "This model", "What it's beating"]}
              rows={[
                ["Ranking quality (PR-AUC)", "0.724", "0.16 — what a random guess scores, which is just the 16% background nonadherence rate"],
                ["Percentage accuracy (Brier — lower is better)", "0.083", "0.135 — what you'd get by always predicting the average rate"],
              ]}
            />
            <p>Those two measures say different things, and both matter. The first says the model ranks members far better than chance. The second says the percentages it prints carry real information in their own right, not just a useful ordering.</p>
          </>
        ),
      },
      {
        id: "drivers",
        title: "What drives the score",
        body: (
          <>
            <p>Not every factor counts equally. Ranked by how much weight the trained model actually gives each one:</p>
            <FactorWeights
              caption="Bars are scaled to the largest factor in this model, not to 100%."
              rows={[
                ["Current pickup pattern this year", "The single dominant signal — actual fills so far", 68],
                ["Weeks in treatment this year", "How much of a track record exists yet", 7],
                ["Best-case ceiling", "Highest PDC still reachable if every remaining day is covered", 5],
                ["Worst-case floor", "Lowest PDC possible if no more days are covered", 4],
                ["Age", "Combined across age groups", 4],
                ["Mail-order pharmacy use", "", 2],
                ["Last year's final result", "Completed prior-year PDC, when available", 1],
                ["Doctor visits", "", 1],
                ["Takes 5+ medications", "", 1],
                ["Gender", "", 1],
                ["All other factors combined", "Prior-year-missing flag, depression history, substance-use history, dementia medication, frequent ER visits, other chronic conditions, hospital admissions", 5],
              ]}
            />
            <p>This is the most concentrated of the three models by a wide margin. A single feature — what the member has actually picked up this year — carries 68% of the weight on its own, against 46% in the DM model and 38% in RAS. For statins specifically, real fill behavior dominates; demographic and health-history factors matter mostly as fine-tuning around it.</p>
          </>
        ),
      },
      {
        id: "accuracy",
        title: "How accurate it is",
        body: (
          <>
            <p>Measured as ranking ability on the held-out test set — given two members, how often the model correctly picks the one more likely to end up nonadherent:</p>
            <DataTable
              headers={["Stage", "Correctly ranks higher- vs. lower-risk member", "What that means"]}
              rows={[
                ["First ~3 months on therapy", "About 6 in 10", "Not yet reliable enough to prioritize outreach on its own"],
                ["After ~3 months on therapy", "About 8 to 9 in 10", "Reliably separates on-track members from drifting ones"],
                ["Averaged across the whole year", "About 88 in 100", "Looks stronger than it is — pulled up by members whose outcome is nearly already decided late in the year"],
              ]}
            />
            <p>In practical terms, the model earns its keep specifically in the window that matters. The early-therapy weakness is the same limit the RAS model has, now independently confirmed for statins on statin data.</p>
          </>
        ),
      },
      {
        id: "calibration",
        title: "How far to trust the number",
        body: (
          <>
            <Hint type="warning" title="Conservative at the top of the scale">
              <p>The riskiest-scored group of members averaged a predicted risk of about <strong>58%</strong>, but actually ended up nonadherent about <strong>83%</strong> of the time. If this score is ever used to set a numeric outreach threshold, true risk at the top of the scale may run higher than the number displayed.</p>
            </Hint>
            <p>Through the low-to-mid range, calibration tracks much closer to the diagonal — a member scored at 25% is reasonably close to a 25% real risk. The gap opens at the top end only.</p>
          </>
        ),
      },
      {
        id: "notes",
        title: "Model-specific notes",
        body: (
          <>
            <ul>
              <li><strong>The age-40 floor and age-90 top-coding were carried over from the RAS model</strong> and have not been independently verified for statins. Statin candidates — diabetics, familial hypercholesterolemia patients — can plausibly skew younger. The training run was itself filtered to age 40 and up, so it doesn't answer the question either.</li>
            </ul>
            <p>The program-level open items — no outreach threshold chosen, no care gap exclusion applied — are shared across all three models and are listed under <a href="#/article/adherence-models/open-items">Open items</a>.</p>
            <p style={{ fontSize: 13, color: "var(--g-fg-3)", marginTop: 24 }}>Built on CareFirst's statin PDC methodology · Validated against 4,437 held-out 2025 members · Model refreshed daily</p>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "model-ras",
    category: "models",
    title: "RAS Adherence Model",
    desc: "The RAS (blood pressure) adherence risk model — its drivers, accuracy, and calibration.",
    updated: "Oct 19, 2026",
    sections: [
      {
        id: "at-a-glance",
        title: "At a glance",
        body: (
          <>
            <Hint type="info" title="Read the shared explainer first">
              <p>What the score means, what the model looks at, and how to read it are the same across all three models and live in <a href="#/article/adherence-models">Adherence Risk Models</a>. This page covers only what's specific to RAS.</p>
            </Hint>
            <ul>
              <li><strong>Medication class.</strong> RAS (blood pressure).</li>
              <li><strong>Population.</strong> Medicare members, age 40–90.</li>
              <li><strong>Refresh.</strong> Daily.</li>
              <li><strong>Status.</strong> Trained and validated on real 2025 PDC outcomes.</li>
              <li><strong>Held-out test set.</strong> 3,500+ members the model never saw during training.</li>
            </ul>
            <p>RAS was the first of the three models built. Its population definition — Medicare, age 40 to 90 — is the one the statin and DM models inherited.</p>
            <p>Its validation run didn't report the PR-AUC and Brier figures the later two models carry. What was checked — and what held — is whether the printed percentages match real outcomes; see <a href="#/article/model-ras/calibration">How far to trust the number</a>.</p>
          </>
        ),
      },
      {
        id: "drivers",
        title: "What drives the score",
        body: (
          <>
            <p>Not every factor counts equally. Ranked by how much weight the trained model actually gives each one:</p>
            <FactorWeights
              caption="Bars are scaled to the largest factor in this model, not to 100%."
              rows={[
                ["Current pickup pattern this year", "The strongest single signal — actual fills so far", 38],
                ["Best-case ceiling", "Highest PDC still reachable if every remaining day is covered", 19],
                ["Age", "Combined across age groups", 8],
                ["Worst-case floor", "Lowest PDC possible if no more days are covered", 7],
                ["Weeks in treatment this year", "How much of a track record exists yet", 6],
                ["Last year's final result", "Completed prior-year PDC, when available", 3],
                ["Recent hospital admissions", "", 3],
                ["History of substance use", "", 2],
                ["Mail-order pharmacy use", "", 2],
                ["Takes 5+ medications", "", 2],
                ["All other factors combined", "Depression history, other conditions, ER visits, dementia medication, gender, doctor visits", 11],
              ]}
            />
            <p>The biggest driver is what the member has actually done this year, not who they are on paper. RAS spreads its attention more evenly than the statin model does — no single feature dominates to the same degree — but health and demographic factors still act mostly as fine-tuning around real behavior.</p>
          </>
        ),
      },
      {
        id: "accuracy",
        title: "How accurate it is",
        body: (
          <>
            <p>Measured as ranking ability on the held-out test set — given two members, how often the model correctly picks the one more likely to end up nonadherent:</p>
            <DataTable
              headers={["Stage", "Correctly ranks higher- vs. lower-risk member", "What that means"]}
              rows={[
                ["First ~3 months on therapy", "About 6 in 10", "Not yet reliable enough to prioritize outreach on its own"],
                ["After ~3 months on therapy", "About 8 to 9 in 10", "Reliably separates on-track members from drifting ones"],
                ["Averaged across the whole year", "About 87 in 100", "Looks stronger than it is — pulled up by members whose outcome is nearly already decided late in the year"],
              ]}
            />
            <Hint type="success" title="It beats doing the arithmetic alone">
              <p>Compared against a simple rule using only the mathematical best-case and worst-case PDC bounds — no modeling at all — the trained model does meaningfully better in the first three months. That's real added value, not just a restatement of the math. It converges with the simple rule later in the year, when the outcome is close to decided either way.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "calibration",
        title: "How far to trust the number",
        body: (
          <>
            <Hint type="success" title="The percentages hold up">
              <p>When this model says a member has a given percent chance of ending up nonadherent, that percentage has been checked against real outcomes and holds. A batch of members scored at roughly <strong>30%</strong> risk did, in fact, end up nonadherent at close to that rate.</p>
            </Hint>
            <p>Of the three models, RAS is the one whose displayed number can be read most directly at face value. The statin model runs conservative at the top of its scale and the DM model runs overconfident through most of its range — see <a href="#/article/adherence-models/calibration">How far to trust the number itself</a> for the comparison.</p>
          </>
        ),
      },
      {
        id: "notes",
        title: "Model-specific notes",
        body: (
          <>
            <p>In a member's first few weeks on therapy there isn't enough history for anyone — including this model — to tell much apart. That isn't a flaw to fix with more tuning; it's an honest limit of how early useful signal exists in pharmacy fill data. Both other models show the same pattern on their own data.</p>
            <p>The program-level open items — no outreach threshold chosen, no care gap exclusion applied — are shared across all three models and are listed under <a href="#/article/adherence-models/open-items">Open items</a>.</p>
            <p style={{ fontSize: 13, color: "var(--g-fg-3)", marginTop: 24 }}>Built on CareFirst's official PDC methodology · Validated against 3,500+ held-out 2025 members · Model refreshed daily</p>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "model-dm",
    category: "models",
    title: "DM Adherence Model",
    desc: "The diabetes medication adherence risk model — its drivers, accuracy, and the calibration caveat that sets it apart.",
    updated: "Oct 19, 2026",
    sections: [
      {
        id: "at-a-glance",
        title: "At a glance",
        body: (
          <>
            <Hint type="info" title="Read the shared explainer first">
              <p>What the score means, what the model looks at, and how to read it are the same across all three models and live in <a href="#/article/adherence-models">Adherence Risk Models</a>. This page covers only what's specific to diabetes medication.</p>
            </Hint>
            <ul>
              <li><strong>Medication class.</strong> Diabetes medication (DM).</li>
              <li><strong>Population.</strong> Medicare members, age 40–90.</li>
              <li><strong>Refresh.</strong> Daily.</li>
              <li><strong>Status.</strong> Trained and validated on real 2025 DM PDC outcomes.</li>
              <li><strong>Held-out test set.</strong> 1,660 members the model never saw during training.</li>
              <li><strong>Background nonadherence rate.</strong> 14.6% of the population.</li>
            </ul>
            <h3>Against the obvious benchmarks</h3>
            <DataTable
              headers={["Measure", "This model", "What it's beating"]}
              rows={[
                ["Ranking quality (PR-AUC)", "0.744", "0.146 — what a random guess scores, which is just the 14.6% background nonadherence rate"],
                ["Percentage accuracy (Brier — lower is better)", "0.081", "Well below what you'd get by always predicting the average rate"],
              ]}
            />
            <p>On ranking ability this is the strongest of the three models. On the trustworthiness of the printed percentage it is the weakest — see <a href="#/article/model-dm/calibration">How far to trust the number</a> below, which is the one place this model's behavior diverges from the other two rather than mirroring them.</p>
          </>
        ),
      },
      {
        id: "drivers",
        title: "What drives the score",
        body: (
          <>
            <p>Not every factor counts equally. Ranked by how much weight the trained model actually gives each one:</p>
            <FactorWeights
              caption="Bars are scaled to the largest factor in this model, not to 100%."
              rows={[
                ["Current pickup pattern this year", "The strongest single signal — actual fills so far", 46],
                ["Best-case ceiling", "Highest PDC still reachable if every remaining day is covered", 16],
                ["Worst-case floor", "Lowest PDC possible if no more days are covered", 8],
                ["Weeks in treatment this year", "How much of a track record exists yet", 6],
                ["Age", "Combined across age groups", 5],
                ["Last year's final result", "Completed prior-year PDC, when available", 3],
                ["Takes 5+ medications", "", 3],
                ["History of substance use", "", 2],
                ["Dementia medication use", "", 2],
                ["Mail-order pharmacy use", "", 2],
                ["All other factors combined", "Depression history, prior-year-missing flag, other chronic conditions, frequent ER visits, hospital admissions, doctor visits, gender", 9],
              ]}
            />
            <p>Where the statin model leans on a single current-pattern feature for 68% of its weight, this model spreads its attention across the whole adherence trajectory: current pickups (46%), the best-case ceiling (16%), and the worst-case floor (8%) together account for roughly 70% of what drives a score. Demographic and health-history factors matter, but mostly as fine-tuning around that trajectory.</p>
          </>
        ),
      },
      {
        id: "accuracy",
        title: "How accurate it is",
        body: (
          <>
            <p>Measured as ranking ability on the held-out test set — given two members, how often the model correctly picks the one more likely to end up nonadherent:</p>
            <DataTable
              headers={["Stage", "Correctly ranks higher- vs. lower-risk member", "What that means"]}
              rows={[
                ["First ~3 months on therapy", "About 6 to 7 in 10", "Not yet reliable enough to prioritize outreach on its own"],
                ["After ~3 months on therapy", "About 9 in 10", "Reliably separates on-track members from drifting ones"],
                ["Averaged across the whole year", "About 90 in 100", "Looks stronger than it is — pulled up by members whose outcome is nearly already decided late in the year"],
              ]}
            />
            <p>The early-therapy weakness is the same limit the RAS and statin models have, now independently confirmed for DM on its own data.</p>
          </>
        ),
      },
      {
        id: "calibration",
        title: "How far to trust the number",
        body: (
          <>
            <Hint type="warning" title="Overconfident through most of the range">
              <p>Members scored around <strong>30–40%</strong> predicted risk actually ended up nonadherent only about <strong>15–20%</strong> of the time. Real risk runs <em>lower</em> than the displayed number through the low-to-mid range. Only right at the very top of the scale — around an 80% predicted score — did the actual outcome line up with the number shown (about 82% nonadherent).</p>
            </Hint>
            <p>This is the opposite of the statin model, which runs conservative at the top rather than overconfident. If this score is ever used to set a numeric outreach threshold anywhere below the very top of the range, expect the true nonadherence rate among flagged members to run well below the displayed number. The ranking is still sound — a higher-scored member really is likelier to be nonadherent than a lower-scored one — so use the score to order a worklist rather than to quote a probability.</p>
          </>
        ),
      },
      {
        id: "notes",
        title: "Model-specific notes",
        body: (
          <>
            <ul>
              <li><strong>The age-40 floor and age-90 top-coding were carried over from the RAS and statin models</strong> and have not been independently verified for diabetes medication, where candidates can plausibly skew younger still. The training run was itself filtered to age 40 and up, so it doesn't answer the question either.</li>
            </ul>
            <p>The program-level open items — no outreach threshold chosen, no care gap exclusion applied — are shared across all three models and are listed under <a href="#/article/adherence-models/open-items">Open items</a>.</p>
            <p style={{ fontSize: 13, color: "var(--g-fg-3)", marginTop: 24 }}>Built on CareFirst's DM PDC methodology · Validated against 1,660 held-out 2025 members · Model refreshed daily</p>
          </>
        ),
      },
    ],
  },
];
