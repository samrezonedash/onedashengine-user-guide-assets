/* guide-articles-3.jsx
   Product Guide / Monitor + Reports + Add-ons
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
];
