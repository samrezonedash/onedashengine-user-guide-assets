/* guide-articles-2.jsx
   Product Guide / Identify + Act
*/

window.GUIDE_ARTICLES_2 = [
  // ─────────────────────────────────────────────────────────
  {
    id: "my-population",
    category: "identify",
    title: "My Population",
    desc: "Track your patients and tag populations of interest.",
    updated: "Dec 12, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to My Population",
        body: (
          <>
            <p><strong>Everyone you are following is here.</strong></p>
            <p>Use this page to track all your patients and populations of interest. Learn more about each section below.</p>
          </>
        ),
      },
      {
        id: "patients",
        title: "My Patients",
        body: (
          <>
            <Cards>
              <Card title="Follow a Patient">Track an individual patient of interest and add them to your "My Population" list for easy profile access.</Card>
              <Card title="Search for a Patient">Type a first name, last name, or member ID — the table narrows to your search text in real time.</Card>
              <Card title="Access Patient Profile">Click any patient name to view their profile: prescriptions, labs, medical claims, and AI medication recommendations.</Card>
            </Cards>
            <Hint type="success">
              <p>For everything that lives on a patient page, see <strong>Individual Patient Pages</strong>.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "tags",
        title: "My Tags",
        body: (
          <>
            <p><strong>Tags are a way to label a select population of interest.</strong> Think of them as a label on a group of patients.</p>
            <Cards>
              <Card title="Create a Tag">Don't see a tag you'd like to have? Submit a support ticket and your OneDash team will get it created for you.</Card>
              <Card title="Follow a Tag">Existing tags can be added to your follow list for easy access to that patient population.</Card>
              <Card title="Tag → Plan">Turn a tag into an intervention plan. Set a start date and see pre- vs. post-intervention financial and clinical outcomes.</Card>
            </Cards>
            <Hint type="success">
              <p>When loading multiple patients into a tag at one time, IDs pasted in should be formatted with a space between each ID number.</p>
            </Hint>
            <Hint type="info" title="Remember">
              <p>Tags are fluid — there is no historical record of changes to a tag. If a patient is removed, there won't be a record they were ever in that tag.</p>
            </Hint>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "individual-patient-pages",
    category: "identify",
    title: "Individual Patient Pages",
    desc: "Every member has a unique profile with their entire health journey.",
    updated: "Dec 16, 2025",
    sections: [
      {
        id: "journey",
        title: "Patient Health Journey",
        body: (
          <>
            <p>On entry, every member shows a high-level overview of their health journey. This includes:</p>
            <ul>
              <li>Name and ID</li>
              <li>Age</li>
              <li>Date of Birth</li>
              <li>Past Medical History (most recent three unique diagnoses)</li>
              <li>Contact information (email and phone), if available</li>
              <li>Last outpatient visit, if available</li>
              <li>Last inpatient admission, if available</li>
              <li>Tags the member is in</li>
              <li>Health journey timeline — defaults to the current year; use the arrows to change year. Click a month to show prescription fills and medical usage for that month.</li>
            </ul>
            <Hint type="info" title="Timeline icons">
              <p><strong>Star icon:</strong> the medication was filled for the first time for this member.</p>
              <p><strong>90 icon:</strong> the member received a 90-day supply for that fill.</p>
            </Hint>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "patient-pages-1.png"}
              alt="Patient health journey timeline showing month-level prescription fills with provider details listed below."
              caption="Example of month-level details when clicking on the patient journey timeline."
            />
          </>
        ),
      },
      {
        id: "notes",
        title: "Notes",
        body: (
          <ul>
            <li>Notes can be left in each member's profile with the option of an attachment.</li>
            <li>Once saved, notes are permanent and cannot be edited — but amendments can be added on top of a saved note.</li>
            <li>Notes are visible across all users in the organization, regardless of department.</li>
          </ul>
        ),
      },
      {
        id: "prescriptions",
        title: "Prescriptions",
        body: (
          <>
            <p>Prescriptions are organized in three sections:</p>
            <ol>
              <li><strong>Prescriptions</strong> — prescriptions at CaryRx pharmacy. This is where you can manually select prescriptions to send to a member from inside OneDash.</li>
              <li><strong>Pending Transfers</strong> — prescriptions requested for transfer to CaryRx that are still in flight. Once the transfer completes, they appear in the section above.</li>
              <li><strong>Other Prescriptions</strong> — the full prescription history of the member, regardless of location.</li>
            </ol>
            <div className="g-cards">
              <div className="g-card">
                <IconBadge src={(window.UG_ASSET_BASE || "") + "patient-pages-2.png"} alt="Paid / All toggle" size={56} bg="#FFF" />
                <h4 className="g-card__title">Paid vs. all claims</h4>
                <p className="g-card__body">The view defaults to paid prescription claims. Use the toggle to show all claims, including reversed and rejected.</p>
              </div>
              <div className="g-card">
                <IconBadge src={(window.UG_ASSET_BASE || "") + "patient-pages-3.png"} alt="Add columns" size={56} bg="#FFF" />
                <h4 className="g-card__title">Add columns</h4>
                <p className="g-card__body">Click this icon and toggle on the columns you want to add to the view.</p>
              </div>
              <div className="g-card">
                <IconBadge src={(window.UG_ASSET_BASE || "") + "patient-pages-4.png"} alt="Download CSV" size={56} bg="#FFF" />
                <h4 className="g-card__title">Download CSV</h4>
                <p className="g-card__body">Click the download button to receive a CSV of the data in this table for offline review.</p>
              </div>
            </div>
            <Hint type="info" title="Search bar">
              <p>Search by drug name or GPI. Start typing — the table narrows to match.</p>
            </Hint>
            <Hint type="success">
              <p>You can request a prescription transfer manually from this table by selecting the prescriptions the member wants transferred and clicking <strong>Transfer Rx's to CaryRx</strong>.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "caryrx-orders",
        title: "CaryRx Order History",
        body: <p>If the patient has prescriptions being ordered from CaryRx, this tab shows the status of those orders and whether they've been delivered.</p>,
      },
      {
        id: "interventions",
        title: "Interventions",
        body: (
          <>
            <p>All interventions identified for this member appear here.</p>
            <ul>
              <li>Visible across all users in the department, regardless of assigned owner.</li>
              <li>Editable and actionable from inside this tab — click the edit button under the Actions column.</li>
              <li>Completed interventions remain viewable, including notes from the time of completion.</li>
              <li><strong>Pause all interventions.</strong> If you want this member excluded from all rule searches, pause indefinitely with this button.</li>
              <li><strong>Add Intervention.</strong> Manually create a new intervention on the patient.</li>
            </ul>
            <Hint type="warning">
              <p>If you create a manual intervention using a rule that runs automatically, it will <strong>not</strong> pull in any custom variables the rule normally captures during an auto-run.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "actions",
        title: "Intervention Actions",
        body: (
          <>
            <p>Every action completed on the patient — manual or automated, regardless of who performed it — shows here.</p>
            <ul>
              <li>For sent faxes, download a PDF of the fax under the Action column.</li>
              <li>For text messages, hover to see the message that went to the provider.</li>
            </ul>
          </>
        ),
      },
      {
        id: "cmr",
        title: "CMR",
        body: (
          <>
            <p>The CMR module records and tracks information from medication conversations with the member.</p>
            <ul>
              <li>Click <strong>Create new</strong> to start a new CMR.</li>
              <li>Enter and save allergies.</li>
              <li>Current medical history defaults to ICD codes from the member's profile on the very first CMR. Clean up the list or add new diagnoses to accurately reflect the member's current state.</li>
              <li>Prescriptions pull in from the prescription history on the first CMR. All fields are editable on double-click.</li>
              <li>Patient verification records who you were speaking to.</li>
              <li>Clinical Expert Signoff records who completed the CMR.</li>
            </ul>
            <Hint type="success">
              <p>Saved CMR data is pulled into AI MTM evaluations — so evaluations are based on the most recent accurate prescription list.</p>
            </Hint>
            <Hint type="warning">
              <p>At this time, CMR completion in OneDash does <strong>not</strong> formally record CMR completion for CMS requirements. If you need that, contact <code>OneDash@caryrx.com</code>.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "ai-mtm",
        title: "AI MTM",
        body: (
          <p>Clair Co-pilot runs a full medication therapy review on the patient's health history and provides pharmacotherapy suggestions. For more on AI MTMs, see <strong>Clair + Clair Co-pilot</strong>.</p>
        ),
      },
      {
        id: "claims",
        title: "Medical Claims · Lab Results · CRISP",
        body: (
          <>
            <p>These tabs provide a detailed view of the patient's medical claims, lab results, and inpatient usage.</p>
            <ul>
              <li>All tables can be downloaded using the download button in the top-right.</li>
              <li>Filter by a specific ICD code and/or by date range.</li>
            </ul>
            <Hint type="warning">
              <p>By default, all historical records are shown. To limit the table, add a start-date filter.</p>
            </Hint>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "individual-provider-pages",
    category: "identify",
    title: "Individual Provider Pages",
    desc: "Every provider has their own unique profile page.",
    updated: "Dec 16, 2025",
    sections: [
      {
        id: "overview",
        title: "Provider overview",
        body: (
          <>
            <p>On entry, you have immediate access to:</p>
            <ul>
              <li>Provider credentials (name, NPI, specialty)</li>
              <li>Provider contact information (phone, fax, email)</li>
              <li>Provider practice address</li>
            </ul>
            <Hint type="info">
              <p>Provider contact information can be edited and updated by you. Any numbers changed in the provider profile are permanent and used for all contact (calling, faxing, etc.) in other parts of OneDash.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "notes",
        title: "Notes",
        body: <p>Leave a note on a provider. Notes are permanent and visible across all users inside OneDash for a given institution.</p>,
      },
      {
        id: "prescribing",
        title: "Prescribing",
        body: (
          <>
            <p>The Prescribing tab gives you insight into prescribing trends:</p>
            <ul>
              <li>High-level insights on:
                <ul>
                  <li>Prescriptions in the current month</li>
                  <li>Prescriptions in the calendar year</li>
                  <li>Prescription spend in the calendar year</li>
                </ul>
              </li>
              <li>Detailed view of every prescription written and which patient it was for — sortable by column and filterable by date range (defaults to calendar year).</li>
            </ul>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "population-browser",
    category: "identify",
    title: "Population Browser",
    desc: "Filter, find, and save any population of interest.",
    updated: "Dec 16, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to the Population Browser",
        body: (
          <>
            <p><strong>This is where you use filters to find your population of interest.</strong></p>
            <p>Filter on demographics, medications, quality measures, prescription details, cost, medical information, and SDOH. Save your filtered list as a static group of people through a tag, or as a pre-saved active filter (hint: from your Dashboard, add the saved filter as a table for easier monitoring). Go one step further and build a visualization from your table using Chart Builder. Identify any population you want to track using the Population Browser.</p>
            <PopulationBrowserMock />
          </>
        ),
      },
      {
        id: "filter-categories",
        title: "Filter categories",
        body: (
          <>
            <h3>Cohorts</h3>
            <ul>
              <li><strong>Tags</strong> — list of member tags.</li>
              <li><strong>Open Care Gaps</strong> — number of a member's care gaps with current status as open.</li>
              <li><strong>Rules</strong> — list of individual rules.</li>
              <li><strong>Category</strong> — list of rule categories.</li>
            </ul>
            <h3>Demographics</h3>
            <ul>
              <li><strong>Age</strong> — current age in years.</li>
              <li><strong>Gender</strong> — male or female.</li>
              <li><strong>Eligibility</strong> — does or does not currently have active plan coverage.</li>
            </ul>
            <h3>Pharmacy &amp; drug utilization</h3>
            <ul>
              <li><strong>Drug Name / GPI / NDC</strong> — identify medications by name and classification.</li>
              <li><strong>Drug Class</strong> — category of the drug.</li>
              <li><strong>Pharmacies / Pharmacy Type</strong> — filter by specific pharmacy or type (retail, hospital, LTC).</li>
              <li><strong>Rx Count</strong> — number of prescriptions filled.</li>
              <li><strong>Days Filled</strong> — days' supply covered by the prescription.</li>
              <li><strong>Rejected Medications</strong> — claims not accepted (formulary, coverage).</li>
              <li><strong>Number of Refills</strong> — count of additional allowed fills.</li>
              <li><strong>Latest Claim Date</strong> — most recent pharmacy claim date.</li>
            </ul>
            <h3>Quality measures</h3>
            <p>See <strong>OneDash Definitions</strong> for every Stars and HEDIS measure available as a filter.</p>
            <h3>Spend</h3>
            <ul>
              <li><strong>Medical Spend</strong> — USD from medical claims covered by all parties (insurance, member, other coverages).</li>
              <li><strong>Pharmacy Spend</strong> — USD from pharmacy claims covered by all parties.</li>
              <li><strong>Percent Total Cost</strong> — percentage of member's total costs.</li>
            </ul>
            <h3>Providers, billing, and utilization</h3>
            <ul>
              <li><strong>Provider</strong> — NPIs of individual providers.</li>
              <li><strong>Billing Codes (ICD / HCPCS / CPT)</strong> — diagnosis and procedure codes.</li>
              <li><strong>Labs</strong> — lab values to include in the filter.</li>
              <li><strong>Admissions / ED Visits / Days Past Discharge</strong> — utilization and transitions of care.</li>
            </ul>
            <h3>SDOH</h3>
            <p>Social and behavioral factors impacting health outcomes — caregiver dependency, access to care/transportation/technology, food insecurity, environmental risk, behavioral engagement, BMI, alcohol, tobacco, marijuana, exercise, diet, HEAL score, pH segmentation, and more.</p>
          </>
        ),
      },
      {
        id: "filtering",
        title: "Filtering",
        body: (
          <>
            <h3>Date range</h3>
            <ul>
              <li>Select a date range to search within.</li>
              <li>Default range is January 1 of the current year to today.</li>
            </ul>
            <Hint type="info">
              <p>Remember — your date range specifies that only data from the chosen range will be included in your view.</p>
            </Hint>
            <h3>Filter navigation bar</h3>
            <ul>
              <li>Use the left-hand filter bar to build a population.</li>
              <li>Show or hide filter columns by checking/unchecking the box next to the filter name.
                <ul><li><strong>Tip.</strong> Not sure what a filter is for? Hover the dotted line for a quick definition.</li></ul>
              </li>
              <li>Once a filter column is on, you can apply a filter value specific to that filter.</li>
              <li>Active filters are listed in the upper right of the window. Click the <code>×</code> to remove one.</li>
              <li><strong>Tip.</strong> Filters don't apply until you hit <strong>Apply</strong> at the bottom.</li>
            </ul>
            <h3>Sorting</h3>
            <ul>
              <li>Sort by any active column using the dropdowns next to the date-range selection.</li>
              <li><strong>Tip.</strong> If you don't see what you're looking for in the dropdown, start typing — the dropdown limits initial options so it doesn't overwhelm.</li>
            </ul>
          </>
        ),
      },
      {
        id: "saving",
        title: "Saving",
        body: (
          <>
            <h3>Save as a tag</h3>
            <ul>
              <li>Click <strong>Save as new tag</strong> and name it.</li>
              <li><strong>Tip.</strong> This is a <em>static</em> list — the population in the tag won't change as data evolves.</li>
              <li><strong>Tip.</strong> Tags are universally viewable — a tag you save can be followed, viewed, and edited by a colleague.</li>
            </ul>
            <h3>Save as a filter preset</h3>
            <ul>
              <li>Click <strong>Save Filter Preset</strong> and give it a name and description.</li>
              <li><strong>Tip.</strong> A filter preset is a <em>fluid</em> list — the list of people may change daily as data changes.</li>
              <li><strong>Tip.</strong> Filter presets are user-specific; a colleague won't see yours.</li>
            </ul>
            <Hint type="warning">
              <p>Columns in the Population Browser table can be dragged into any order, but a CSV download will use the default column order.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "chart-builder",
        title: "Chart Builder",
        body: (
          <p>Expand <strong>Chart Builder</strong> to view your filtered data as a visualization. Pick the visualization type and define which filters become the X and Y axes.</p>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "rules",
    category: "identify",
    title: "Rules",
    desc: "Pre-programmed parameters that scan a population and generate care gaps in real time.",
    updated: "Aug 22, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to Rules",
        body: (
          <>
            <p>A rule is a set of pre-programmed parameters directed at a specified population. Rules let you identify patients in real time whenever they match your parameters of interest.</p>
            <p>For example: you can make a rule that evaluates children ages 2 to 12 for anyone who fills an epilepsy medication and has &lt;80% adherence. The rule triggers a care gap to <strong>monitor adherence for epilepsy medications</strong> in an effort to prevent hospitalization. Care gaps are auto-generated by the rule whenever it runs.</p>
          </>
        ),
      },
      {
        id: "buttons",
        title: "Actionable buttons",
        body: (
          <>
            <h3>RUN</h3>
            <Cards>
              <Card title="▶|| Soft run">A soft run shows how many care gaps <em>would</em> have been generated if you had run the rule. Download a CSV of the potential interventions to evaluate offline.</Card>
              <Card title="▶ Hard run">A hard run executes the rule and reports the number of care gaps generated. Duplicates aren't created — if an active intervention already exists, a second one won't generate.</Card>
            </Cards>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "care-gaps",
    category: "act",
    title: "Care Gaps",
    desc: "Manage interventions and bulk actions on open care gaps.",
    updated: "Nov 19, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to Care Gaps",
        body: (
          <>
            <p><strong>Care gap opportunities are opportunities to improve patient care.</strong></p>
            <p>This is where all your open care gaps live. They may be auto-generated by a rule, by the completion of a funnel, or created manually. Care gaps for each individual patient also appear in the patient's profile.</p>
            <CareGapTableMock />
            <h3>Care gaps are grouped per member</h3>
            <ul>
              <li>The Care Gaps table displays members who have an open care gap assigned to you, with the most recent gaps at the top.</li>
              <li>If you own a care gap on a member, you'll see <em>all</em> currently open care gaps for that member — not just yours. This is intentional. It helps you understand all the gaps identified on a member and coordinate with other departments.</li>
            </ul>
          </>
        ),
      },
      {
        id: "what-is-a-gap",
        title: "What is a care gap?",
        body: (
          <>
            <p>A care gap, in its simplest definition, is the notification that a patient has a healthcare gap that needs to be closed.</p>
            <p>Each care gap has:</p>
            <ul>
              <li>The date it was generated</li>
              <li>The owner (individual or team)</li>
              <li>The patient name and ID</li>
              <li>The rule name (if auto-generated)</li>
              <li>The details of the open gap (under the Care Gap column)</li>
              <li>A priority you set</li>
              <li>A status — defaults to <strong>New</strong>, editable by you</li>
            </ul>
          </>
        ),
      },
      {
        id: "act-on-gaps",
        title: "Acting on a care gap",
        body: (
          <>
            <h3>Care gap actions</h3>
            <ul>
              <li>Open the details of any gap using the button on the right of the table under <strong>Manage</strong>.</li>
              <li>The top of the details modal shows basic details on the intervention.</li>
              <li>The Actions section lets you schedule, track, and save actions for that gap:
                <ul>
                  <li><strong>Possible actions:</strong> EHR messages, faxes, AI agent calls, text messages. Tracked automatically on schedule and send.</li>
                  <li><strong>Automations.</strong> Put a care gap into an automation; all future actions become visible with their scheduled times. Remove a gap from an automation to cancel its future scheduled actions (manual actions are preserved).</li>
                  <li><strong>Manual schedule.</strong> Click the corresponding action button — <strong>Send now</strong> or pick a future time. All scheduled actions can be edited later.</li>
                </ul>
              </li>
              <li><strong>Tip.</strong> Care gaps in an automation appear in light blue in the table.</li>
              <li><strong>Log external calls.</strong> Select the call type to log the person called, the number used, and an optional outcome.</li>
              <li><strong>Track action history.</strong> Every gap has a full action history visible from the details modal.</li>
              <li><strong>Reminder dates.</strong> Set a reminder to come back to a gap. When the reminder date hits, the member appears at the top of your table with a red <strong>!</strong> icon and the gap is highlighted in red.</li>
              <li>Edit the owner, priority, and status of any gap.</li>
              <li>Leave notes for tracking and documentation. Notes are editable until the gap is completed — after that, only addendums can be made.</li>
            </ul>

            <h3>Bulk care gap actions</h3>
            <ul>
              <li>Use the checkboxes on the left of the table to select multiple gaps, then pick your action.</li>
              <li>Use the bulk-select menu to change the owner, priority, or status of all selected gaps. Don't forget to <strong>Save</strong>.</li>
            </ul>
            <h4>Bulk faxing &amp; bulk EHR messaging tips</h4>
            <ul>
              <li>You can select up to 4 taxonomies — the fax/EHR will preference the send in the order of taxonomies selected.</li>
              <li>Alternatively, choose to fax/EHR the provider who most recently wrote the prescription.</li>
              <li>The fax number defaults to what's on file from pharmacy claims; if missing, OneDash pulls from the NPI registry. EHR messages go directly through Direct Trust.</li>
              <li><strong>Tip.</strong> Fax numbers can be updated in each provider's profile. If a fax number is missing or you find an updated one, save it there — it'll be used permanently.</li>
              <li>Every fax/EHR message shows as its own line item in bulk actions.</li>
            </ul>
          </>
        ),
      },
      {
        id: "manage-gaps",
        title: "Managing your queue",
        body: (
          <>
            <p>It's easy to get lost in a sea of care gaps. Use filters to find exactly which ones you want to work on.</p>
            <Hint type="info" title="Filters pull on a member level">
              <p>Filtering for any of the below pulls all members for which you have an assigned care gap that matches the filter. You'll see all open care gaps for that member by default, even if some are assigned to someone else — this is intentional, to give you a holistic view.</p>
            </Hint>
            <h3>Care gap filters</h3>
            <ul>
              <li><strong>Rule Category</strong> — all gaps generated from rules in a specific category.</li>
              <li><strong>Rule Name</strong> — all gaps generated from a specific rule.</li>
              <li><strong>Status</strong> — all gaps that meet a specific status (multi-select).</li>
              <li><strong>Priority</strong> — all gaps that meet a specific priority (multi-select).</li>
            </ul>
            <p>You can also use the search bar and type a patient ID to see only that patient's gaps. Note: the entire patient ID is required for the search to succeed.</p>
          </>
        ),
      },
      {
        id: "actions-tab",
        title: "The Actions tab",
        body: (
          <>
            <p><strong>The Actions tab is where you track every action taken over time.</strong> Every action taken in OneDash generates an individual row here.</p>
            <h3>What are care gap actions?</h3>
            <ul>
              <li>Care gap actions appear per patient per action — e.g. sending 10 faxes at once creates 10 actions, one per patient.</li>
              <li>The action table shows:
                <ul>
                  <li>When the action was made</li>
                  <li>Who it was made on</li>
                  <li>Who was contacted</li>
                  <li>Which templates were used (if any)</li>
                  <li>Who made the action</li>
                  <li>The status of each action</li>
                  <li>A copy of the completed action</li>
                </ul>
              </li>
            </ul>
            <h3>What can I do with actions?</h3>
            <ul>
              <li>Refresh and update the status of in-flight actions.</li>
              <li>View a copy of any completed action:
                <ul>
                  <li><strong>Faxes &amp; EHR messages</strong> — view a PDF of what was delivered.</li>
                  <li><strong>AI virtual agent calls</strong> — download a transcript.</li>
                  <li><strong>Text messages &amp; tracked calls</strong> — hover for the message or outcome.</li>
                </ul>
              </li>
              <li><strong>Fax resend.</strong> For failed faxes, resend a duplicate to a provider and number of your choosing.</li>
            </ul>
            <Hint type="warning">
              <p>Remember — filters pull on a member level.</p>
            </Hint>
            <p>Use the action filters to find:</p>
            <ul>
              <li>Actions made using a specific template</li>
              <li>Actions in a specific status (multi-select)</li>
              <li>Actions completed by a specific user</li>
              <li>Action statuses</li>
            </ul>
            <Hint type="info">
              <p>Your view of care gaps and actions depends on your user role:</p>
              <p><strong>Admin</strong> — can see every user's care gaps and actions.</p>
              <p><strong>Clinical Expert</strong> — can see care gaps and actions only for members with gaps assigned to you.</p>
            </Hint>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "automations",
    category: "act",
    title: "Automations",
    desc: "Multi-step workflows that close care gaps without manual effort.",
    updated: "Aug 22, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to Automations",
        body: (
          <>
            <p>The goal of automations is to enhance efficiency and effectiveness without needing additional human resources. A care gap can be manually assigned to or moved out of an automation as needed. Care gaps can also be automatically moved into an automation by CPDs (carepath decisions).</p>
            <AutomationFunnelMock />
          </>
        ),
      },
      {
        id: "funnels",
        title: "Funnels",
        body: (
          <>
            <p>A funnel is a multi-layered workflow. Funnels let you contact patients and providers from multiple angles to close the care gap. After one step of the funnel runs, the funnel pauses for a specified number of days, then runs the next step on patients who weren't closed by the previous step.</p>
            <p>By default, all funnels have a final <strong>Convert</strong> step. If a patient has reached the end of the funnel and still has an open gap, they're removed from the automation so the care team can continue working them manually.</p>
          </>
        ),
      },
      {
        id: "monitoring",
        title: "How can I tell my funnel is working?",
        body: (
          <>
            <p>On the Automations page, the <strong>Automation Preview</strong> gives a high-level overview of the selected automation, one step per panel. The action for each step is displayed on its panel, along with the pause time after the step. Hover for more statistics on gaps currently on that step, including number of iterations (if the step is set to repeat).</p>
            <p>For deeper details on the selected automation, click <strong>See Details</strong> in the top right. This opens a modal with <strong>Members in Funnel Steps</strong>, with details for every member/care gap and their current status. The other tab, <strong>Closed Interventions</strong>, shows details on gaps closed by the funnel.</p>
            <p>A table of all existing automations lives below the Automation Preview. To switch automations, click <strong>Show Preview</strong> or <strong>See Details</strong> on the row you want.</p>
          </>
        ),
      },
      {
        id: "build",
        title: "Build a funnel",
        body: (
          <Hint type="info">
            <p>Contact the OneDash team to build your funnels — we'll architect the steps and the timing alongside you.</p>
          </Hint>
        ),
      },
    ],
  },
];
