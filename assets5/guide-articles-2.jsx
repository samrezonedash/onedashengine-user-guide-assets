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
    updated: "Jul 30, 2026",
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
              <li>Contact information (email, phone, and address), if available</li>
              <li>Last outpatient visit, if available</li>
              <li>Last inpatient admission, if available</li>
              <li>Health journey timeline — defaults to the current year; use the arrows to change year. Click a month to show prescription fills and medical usage for that month.</li>
            </ul>
            <Hint type="info" title="Timeline icons">
              <p><strong>Star icon:</strong> the medication was filled for the first time for this member.</p>
              <p><strong>90 icon:</strong> the member received a 90-day supply for that fill.</p>
            </Hint>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "patient-pages-1.png"}
              alt="Individual patient page showing demographics, contact info, last visits, past medical history, and a Health Journey timeline along the bottom."
              caption="Example of an Individual Patient Page — demographics and contact info up top, Health Journey timeline along the bottom. Click any month to drill into prescriptions and medical usage."
            />
          </>
        ),
      },
      {
        id: "workflow",
        title: "Workflow and patient status",
        body: (
          <>
            <p>The <strong>Workflow</strong> section tells you where this patient stands at a glance — who's working them, what's already been tried, and what's still outstanding.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "patient-workflow-1.png"}
              alt="The Workflow card on a patient page, showing Outreach Status set to In progress, a Work Status dropdown open with options including Pending Claim, Pending MR, Pending Door Drop, and Pending Rx/Provider, a Primary Caseworker field, a Follow control, and a row of Tags underneath."
              caption="The Workflow card. Outreach Status, Work Status, and Primary Caseworker are set here, and the patient's Tags sit along the bottom."
            />
            <h3>Outreach Status</h3>
            <p>Displays the type of outreach that is most current on the patient — for example complete, opted out, 1st, 2nd, or 3rd attempt, or deferred. Beneath it you'll see when it was last updated and by whom.</p>
            <h3>Work Status</h3>
            <p>Displays the most recent pending actions on the patient — for example pending claim, pending Rx/Pharmacy, ACLU, or door drop. Click <strong>Set status</strong> to choose from the list.</p>
            <h3>Primary Caseworker</h3>
            <p>Shows the primary point of contact who works on this patient.</p>
            <h3>Tags</h3>
            <p>The tags this member is in are listed along the bottom of the Workflow section. Use the <code>+</code> control to add a tag.</p>
          </>
        ),
      },
      {
        id: "contact-info",
        title: "Editing contact information",
        body: (
          <>
            <p>Email, phone, and address each hold up to four entries, and you can edit them right from the Demographics section. Click the edit icon in the corner of the <strong>Email</strong>, <strong>Phone</strong>, or <strong>Address</strong> card to make changes.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "patient-contact-1.png"}
              alt="Demographics cards for Email, Phone, and Address. Each lists four slots: the first is labeled Eligibility File, followed by second, third, and fourth entries. A Third Email entered manually is highlighted as the selected default, and a tooltip reads Selected as default."
              caption="Each contact card holds four entries. The first is loaded from your eligibility file; the third and fourth can be entered manually. The highlighted entry is the selected default."
            />
            <ul>
              <li><strong>First and second entries</strong> are loaded automatically from your data file — the first is labeled <strong>Eligibility File</strong>.</li>
              <li><strong>Third and fourth entries</strong> are yours to fill in manually, so you can record a number, email, or address your team has confirmed.</li>
              <li><strong>Choosing which one to use.</strong> Click into an entry's box to select it as the default. The selected entry is highlighted, and hovering shows a <strong>Selected as default</strong> label.</li>
              <li>Each card shows when it was <strong>last edited</strong>, so you can tell how current the information is.</li>
            </ul>
            <Hint type="info">
              <p>The entry you select as default is the one OneDash uses for outreach elsewhere in the platform — so if your team confirms a better number, add it and select it here.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "notes",
        title: "Notes",
        body: (
          <ul>
            <li>Notes can be left in each member's profile with the option of an attachment.</li>
            <li>Once saved, notes are permanent and cannot be edited — but an addendum can be added on top of a saved note.</li>
            <li>Notes are visible across all users in the organization, regardless of department.</li>
          </ul>
        ),
      },
      {
        id: "prescriptions",
        title: "Prescriptions",
        body: (
          <>
            <p>The Prescriptions tab shows the full prescription history of the member, regardless of where the prescription was filled.</p>
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
          </>
        ),
      },
      {
        id: "care-gaps",
        title: "Care Gaps",
        body: (
          <>
            <p>All Care Gaps identified for this member appear here.</p>
            <ul>
              <li>Visible across all users in the department, regardless of assigned owner.</li>
              <li>Editable and actionable from inside this tab — click the edit button under the Actions column.</li>
              <li>Completed Care Gaps remain viewable, including notes from the time of completion.</li>
              <li><strong>Pause all Care Gaps.</strong> If you want this member excluded from all rule searches, pause indefinitely with this button.</li>
              <li><strong>Add Care Gap.</strong> Manually create a new Care Gap on the patient.</li>
            </ul>
            <Hint type="warning">
              <p>If you create a manual Care Gap using a rule that runs automatically, it will <strong>not</strong> pull in any custom variables the rule normally captures during an auto-run.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "actions",
        title: "Care Gap Actions",
        body: (
          <>
            <p>Every action completed on the patient — manual or automated, regardless of who performed it — shows here.</p>
            <ul>
              <li>For sent faxes, download a PDF of the fax under the Action column.</li>
              <li>For text messages, hover to see the message that went to the provider.</li>
              <li><strong>AI calling.</strong> Calls placed by Dash AI on this patient are recorded here alongside every other action.</li>
              <li><strong>Manually tracked actions.</strong> Actions your team completes outside OneDash can be logged here, so the patient's history stays complete.</li>
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
              <p>At this time, CMR completion in OneDash does <strong>not</strong> formally record CMR completion for CMS requirements. If you need that, contact <code>support@onedashengine.com</code>.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "ai-mtm",
        title: "AI MTM",
        body: (
          <>
            <p>Dash AI runs a full medication therapy review on the patient's health history and provides pharmacotherapy suggestions. For more on AI MTMs, see <strong>Dash AI</strong>.</p>
            <Hint type="info">
              <p>AI MTM evaluates a trailing 12 months of the patient's history.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "claims",
        title: "Medical Claims · Lab Results · HIE",
        body: (
          <>
            <p>These tabs provide a detailed view of the patient's medical claims, lab results, and inpatient usage.</p>
            <ul>
              <li>All tables can be downloaded using the download button in the top-right.</li>
              <li>Filter by a specific ICD code and/or by date range.</li>
            </ul>
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
    updated: "Jul 30, 2026",
    sections: [
      {
        id: "overview",
        title: "Provider overview",
        body: (
          <>
            <p>On entry, you have immediate access to:</p>
            <ul>
              <li>Provider credentials — name, NPI, and taxonomy</li>
              <li>Provider contact information — <strong>Phone</strong>, <strong>Fax</strong>, and <strong>Email</strong></li>
              <li><strong>Practice Location</strong></li>
            </ul>
            <p>Underneath the contact cards you'll find the provider's <strong>Notes</strong>, <strong>Prescribing</strong>, and <strong>Communication History</strong> tabs.</p>
          </>
        ),
      },
      {
        id: "contact-info",
        title: "Editing contact information",
        body: (
          <>
            <p>Provider contact information works the same way it does on a patient profile — <strong>Phone</strong>, <strong>Fax</strong>, <strong>Email</strong>, and <strong>Practice Location</strong> each hold up to four entries, and you can update them yourself. Click the edit icon in the corner of a card to make changes.</p>
            <ul>
              <li><strong>The first entry</strong> is loaded automatically from the <strong>NPI Registry</strong> and labeled as such.</li>
              <li><strong>The second, third, and fourth entries</strong> are yours to fill in manually, so you can record details your team has confirmed.</li>
              <li><strong>Choosing which one to use.</strong> Click into an entry's box to select it as the default, then save. The selected entry is highlighted.</li>
              <li>Each card shows when it was <strong>last edited</strong>, or <strong>No recent edits</strong> if nothing has changed.</li>
            </ul>
            <Hint type="warning">
              <p>Any contact details changed in the provider profile are permanent and are used for all contact (calling, faxing, etc.) in other parts of OneDash.</p>
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
      {
        id: "communications",
        title: "Communication History",
        body: (
          <>
            <p>The <strong>Communication History</strong> tab is the provider's full outreach history. Every record OneDash has sent to this provider is stored here.</p>
            <ul>
              <li>All historical records sent to the provider through OneDash are kept on this tab — nothing rolls off.</li>
              <li>Use it to confirm what a provider has already received before reaching out again, and to see when it was sent.</li>
            </ul>
            <Hint type="info">
              <p>This is the fastest way to answer "have we already contacted this provider about this?" without digging through individual patients.</p>
            </Hint>
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
    updated: "Jul 30, 2026",
    sections: [
      {
        id: "welcome",
        title: "Welcome to the Population Browser",
        body: (
          <>
            <p><strong>This is where you use filters to find your population of interest.</strong></p>
            <p>Filter on demographics, medications, adherence, quality measures, prescription details, cost, medical information, and SDOH. Save your filtered list as a pre-saved active filter preset (hint: from your Dashboard, add the saved filter as a table for easier monitoring). Identify any population you want to track using the Population Browser.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "population-browser-1.png"}
              alt="Population Browser — filter panel on the left (Cohorts, Demographics, Quality Measures, SDOH, Dynamic Filters), Patient Data Table on the right with sort, search, and Save Filter Preset controls."
              caption="The Population Browser: filters on the left, a live patient table on the right. Save any view as a filter preset."
            />
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
            </ul>
            <h3>Adherence</h3>
            <ul>
              <li><strong>Chronic adherence</strong> — adherence across the member's chronic medications.</li>
              <li><strong>Past / future adherence</strong> — adherence already recorded to date, and projected adherence going forward.</li>
              <li><strong>Disease class adherence</strong> — adherence within a specific disease class.</li>
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
            <Hint type="warning">
              <p>This section is only functional if you're subscribed to OneDash's SDOH datasource.</p>
            </Hint>
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
            <h3>Save as a filter preset</h3>
            <ul>
              <li>Click <strong>Save Filter Preset</strong> and give it a name and description.</li>
              <li><strong>Tip.</strong> A filter preset is a <em>fluid</em> list — the list of people may change daily as data changes.</li>
            </ul>
            <h3>Global vs. individual presets</h3>
            <p>When you save a preset, you choose who it's for:</p>
            <ul>
              <li><strong>Global</strong> — visible to everyone in your organization. Use this for views the whole team should work from.</li>
              <li><strong>Individual</strong> — visible only to you. Use this for your own working views.</li>
            </ul>
            <Hint type="warning">
              <p>Columns in the Population Browser table can be dragged into any order, but a CSV download will use the default column order.</p>
            </Hint>
          </>
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
    desc: "Manage interventions, actions, and bulk operations on open care gaps.",
    updated: "Jul 30, 2026",
    sections: [
      {
        id: "welcome",
        title: "Welcome to Care Gaps",
        body: (
          <>
            <p><strong>Care gap opportunities are opportunities to improve patient care.</strong></p>
            <p>This is where all your open care gaps live. They may be auto-generated by a rule or created manually.</p>
          </>
        ),
      },
      {
        id: "using-the-page",
        title: "Using the Care Gaps page",
        body: (
          <>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-page-1.png"}
              alt="The Care Gaps page with three numbered callouts: 1 Filters in the left panel with date range, owner/team, rule/category, status and priority; 2 Sort and Search above the table; 3 the care gap table listing members with most recent care gap, most recent action, open care gap count, and tags."
              caption="The Care Gaps page — filters on the left, sort and search above the table, and one row per member."
            />
            <ul>
              <li><strong>Filters (left panel)</strong> — Set filters to control what patients show in your care gap table. Narrow by date range, owner or team, rule and category, status, and priority, then select <strong>Apply</strong>.</li>
              <li><strong>Sort and Search (top of table)</strong> — Sort your table by a specific column, or enter a name or ID to see care gaps for only specific patients. <strong>Reset</strong> clears both back to the default view.</li>
              <li><strong>Care gap table (main section)</strong> — Each row is one member, with their most recent care gap, most recent action, and open care gap count. Select the <code>&gt;</code> caret at the start of a row to expand it and review that member's individual care gaps.</li>
            </ul>
            <h3>Your care gaps</h3>
            <ul>
              <li>By default, the Care Gaps table displays members who have an open care gap assigned to you, with the most recent gaps at the top.</li>
              <li>If you own a care gap on a member and drop down their care gap table, you'll see <em>all</em> currently open care gaps for that member — not just yours. This is intentional. It helps you understand all the gaps identified on a member and coordinate with other departments.</li>
            </ul>
            <Hint type="info">
              <p>If needed, you can view care gaps assigned to other users by using the filters on the left-hand filter bar.</p>
            </Hint>
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
              <li>Actions taken on the care gap</li>
              <li>The rule name (if auto-generated) or <strong>Manual</strong> if created manually</li>
              <li>The care gap needing to be addressed</li>
              <li>The owner (individual or team)</li>
              <li>A priority you set, used optionally for work prioritization</li>
              <li>A status — defaults to <strong>New</strong>, editable by you</li>
            </ul>
            <Hint type="info">
              <p>If you cannot see all these columns, remember to scroll left!</p>
            </Hint>
          </>
        ),
      },
      {
        id: "act-on-gaps",
        title: "Acting on a care gap",
        body: (
          <>
            <p>Open the details of any gap using the <i className="fa-solid fa-pen-to-square" aria-hidden="true" style={{ color: "var(--g-accent)" }} /> button on the right of the table under <strong>Manage</strong>. It opens the action modal for that individual care gap.</p>
            <h3>Action modal breakdown</h3>
            <p>The modal is organized into accordions. Collapse any of them with the <code>^</code> button if you don't need that information.</p>
            <h4>Care Gap Details</h4>
            <p>The top of the modal shows basic details on the care gap — the gap itself, when it was created, the patient name and DOB, member number, the parameter, and the rule name.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-details.png"}
              alt="The Care Gap Details accordion showing fields for Care Gap, Created At, Patient Name with DOB, Member Number, Parameter, and Rule Name."
              caption="Care Gap Details — the basics on the gap you're working."
            />
            <h4>Patient Data</h4>
            <p>Closed by default. When opened, it shows a high-level summary of the patient's prescription and medical claims data. This is meant to be a quick check — for a full picture of the health journey, we recommend entering the patient's individual page.</p>
            <h4>Automations</h4>
            <p>Put a care gap into an automation and all future actions become visible with their scheduled times. Remove a gap from an automation to cancel its future scheduled actions — manual actions are preserved.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-automations.png"}
              alt="The Automations section of the care gap modal, with a dropdown to select an automation and an Automate button."
              caption="Select an automation to automate gap closure."
            />
            <Hint type="info">
              <p><strong>Tip.</strong> Care gaps in an automation appear in light blue in the table.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "actions-in-onedash",
        title: "Actions executed within OneDash",
        body: (
          <>
            <p>The <strong>Actions</strong> section lets you schedule, track, and save actions for that gap. Select one of the four icons to begin scheduling an action for this member.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-actions-bar.png"}
              alt="The Actions header of the care gap modal with four icon buttons on the right — EHR message, AI agent call, fax, and text message — and a callout labeling them Action buttons."
              caption="Four action buttons: EHR message, AI agent call, fax, and text message."
            />
            <div className="g-cards">
              <div className="g-card">
                <IconBadge icon="fa-solid fa-laptop-medical" size={56} />
                <h4 className="g-card__title">Provider EHR messages</h4>
                <p className="g-card__body">Send a templated message to a provider reachable through EHR.</p>
              </div>
              <div className="g-card">
                <IconBadge icon="fa-solid fa-phone" size={56} />
                <h4 className="g-card__title">Patient AI agent calls</h4>
                <p className="g-card__body">Have an AI agent call the patient inside your guardrails.</p>
              </div>
              <div className="g-card">
                <IconBadge icon="fa-solid fa-fax" size={56} />
                <h4 className="g-card__title">Provider faxes</h4>
                <p className="g-card__body">Fax a provider or pharmacy using your saved templates.</p>
              </div>
              <div className="g-card">
                <IconBadge icon="fa-solid fa-comment-sms" size={56} />
                <h4 className="g-card__title">Patient text messages</h4>
                <p className="g-card__body">Text the patient from a template or freeform.</p>
              </div>
            </div>
            <Hint type="success">
              <p>These actions, when sent from OneDash, are tracked automatically and will show in the past action history.</p>
            </Hint>

            <h3>Provider EHR messages</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-ehr.png"}
              alt="The Act on this Care Gap modal on the EHR tab, with callouts for deciding the action time (Send Immediately or Schedule for Future), selecting the EHR template, selecting a provider with a Search DirectTrust Providers toggle, and the Submit button."
              caption="Scheduling an EHR message. Only providers reachable through EHR on this member's profile are listed — toggle Search DirectTrust Providers to find others."
            />
            <ul>
              <li><strong>Decide on action time.</strong> Send immediately, or schedule for a future time — choosing <strong>Schedule for Future</strong> reveals the date/time selector.</li>
              <li><strong>Select the template.</strong> If you pick a Gen Rec template, an open text box appears so you can write your recommendation to the provider.</li>
              <li><strong>Select a provider.</strong> Only providers reachable through EHR on this member's profile are listed. Toggle <strong>Search DirectTrust Providers</strong> and enter a name to find anyone else reachable by EHR.</li>
            </ul>

            <h3>Provider faxes</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-fax.png"}
              alt="The Act on this Care Gap modal on the Fax tab, with callouts for action time including a Send to Batch option, recipient type, fax template selection, selecting an existing provider with a Search NPI Registry toggle, and Submit."
              caption="Scheduling a fax. Fax adds a third timing option — Send to Batch — which queues the fax for 9 AM the next day."
            />
            <ul>
              <li><strong>Decide on action time.</strong> Fax adds a third option, <strong>Send to Batch</strong>, which schedules the fax for tomorrow at 9 AM. If a matching fax attempt is already queued for tomorrow, OneDash merges the data and sends one fax with all relevant information instead of several.</li>
              <li><strong>Recipient type.</strong> Fax providers or pharmacies, each with their relevant templates.</li>
              <li><strong>Select an existing provider.</strong> Doctors who have prescribed for or seen the member in the past 12 months appear here. If the doctor you need isn't listed, toggle <strong>Search NPI Registry</strong> and search by name or NPI.</li>
            </ul>

            <h3>Patient AI agent calls</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-aicall.png"}
              alt="The Act on this Care Gap modal on the AI Call tab, with callouts for action time and patient-facing hours, recipient type defaulting to Patient, Call Schedule Team, and AI Agent selection."
              caption="Scheduling an AI agent call. Patient-facing actions can only be sent 9 AM–6 PM, Monday–Friday."
            />
            <ul>
              <li><strong>Decide on action time.</strong> Patient-facing actions can only be sent 9 AM–6 PM, Monday–Friday. Outside those hours you must future-schedule the action inside that window.</li>
              <li><strong>Recipient type.</strong> Defaults to patient facing — the only option at this time.</li>
              <li><strong>Call Schedule Team.</strong> Defaults to your primary team. If the AI agent successfully books an appointment, it schedules to this team's calendar.</li>
              <li><strong>AI Agent.</strong> Select the correct agent to use for calling out, then select <strong>Submit</strong>.</li>
            </ul>

            <h3>Patient text messages</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-text.png"}
              alt="The Act on this Care Gap modal on the Text tab, with callouts for action time, text template selection, an editable Message box, and a HIPAA and PHI compliance confirmation checkbox above Submit."
              caption="Scheduling a text. Templates populate the message and stay editable — and you confirm HIPAA/PHI appropriateness before sending."
            />
            <ul>
              <li><strong>Select the template.</strong> Pick a text template to populate the message below, or write a freeform message if you select no template.</li>
              <li><strong>Message.</strong> Populated templates can still be edited before sending.</li>
              <li><strong>Confirm compliance.</strong> Check the box to confirm you are responsible for the message content and that the recipient is appropriate under HIPAA and PHI guidelines.</li>
            </ul>
          </>
        ),
      },
      {
        id: "manual-actions",
        title: "Manually tracked actions",
        body: (
          <>
            <p>Manually tracked actions are actions completed offline of OneDash and tracked in OneDash. You can track five different types.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-manual-select.png"}
              alt="The Record a manual action dropdown, open to show five options: Outbound Call, Inbound Call, CM Rounds Rec, Mail, and MD Appointment."
              caption="Five manual action types: Outbound Call, Inbound Call, CM Rounds Rec, Mail, and MD Appointment."
            />

            <h3>Outbound &amp; Inbound Calls</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-manual-call.png"}
              alt="Recording an Outbound Call, with callouts for recipient type, recipient name and number, call status, and a Call Notes box with a toggle to also post the note to the member's Note tab."
              caption="Recording a call. Selecting Patient autofills the name and number on file; selecting Provider lists providers seen in the past 12 months."
            />
            <ul>
              <li><strong>Recipient type.</strong> Select the type of stakeholder receiving the call. <strong>Patient</strong> autofills the recipient name and number from the data on file — both stay editable. <strong>Provider</strong> gives you a dropdown of current providers on record within the past 12 months, or lets you enter provider data manually.</li>
              <li><strong>Call status.</strong> Select whether the call was successfully sent or not.</li>
              <li><strong>Call notes.</strong> Record any call notes. The note stays in this call tracker; to additionally post it directly to the member's Note tab, switch on <strong>Also post this to the member's Note tab</strong>.</li>
            </ul>
            <Hint type="warning" title="Important">
              <p>Currently, a manually tracked call can only be associated with one care gap. If you make a call and address multiple gaps, you may either track multiple calls, or simply paste the call notes into the other gaps for tracking purposes. Enhancements to this are underway to make the process more efficient.</p>
            </Hint>

            <h3>CM Rounds Rec</h3>
            <p>Record a case management rounds recommendation against the gap.</p>

            <h3>Mail</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-manual-mail.png"}
              alt="Recording a Mail action, with callouts for recipient type and for recipient name and address, which auto-populate from the selection and remain editable."
              caption="Recording mail. Patient auto-populates the name and address on file; Provider opens a dropdown of known providers from the past 12 months."
            />
            <ul>
              <li><strong>Recipient type.</strong> <strong>Patient</strong> auto-populates the patient's name and address on file — both stay editable. <strong>Provider</strong> opens a dropdown of known providers from the past 12 months; if the provider you need isn't showing, enter the name and address manually.</li>
              <li><strong>Recipient name and address.</strong> Auto-populated from the selection above and editable — enter the details manually for any recipient not on file.</li>
            </ul>

            <h3>MD Appointment</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-manual-md.png"}
              alt="Recording an MD Appointment, with callouts for the provider field, the scheduled appointment date, appointment type, and appointment status, plus a note that the appointment posts to the member's Appointments tab."
              caption="Recording an MD appointment. Enter the date the appointment is meant to happen — not the date you're tracking the record."
            />
            <ul>
              <li><strong>Provider.</strong> Select the provider being seen. If the provider doesn't show in the dropdown, free-form the provider name into the field.</li>
              <li><strong>Scheduled appointment date.</strong> Enter the date the appointment is meant to happen — not the date you are tracking this record.</li>
              <li><strong>Appointment type.</strong> Select the type of appointment that will be happening.</li>
              <li><strong>Appointment status.</strong> Select the status of the appointment. You can update the status later, once the appointment has happened.</li>
            </ul>
            <Hint type="info">
              <p>The appointment tracked here automatically posts into the <strong>Appointments</strong> tab in the patient's individual profile.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "action-history",
        title: "Track action history",
        body: (
          <>
            <p>Every gap has a full action history. Use it to understand how the gap has been actioned and how you may need to follow up.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-history.png"}
              alt="The Past Action Summary for a care gap — count chips for Outbound Call and Text, above a table with Type, Status, Created, Created By, Recipient, and Outcome columns."
              caption="Past Action Summary — every action on the gap, who made it, who received it, and its outcome."
            />
          </>
        ),
      },
      {
        id: "gap-details",
        title: "Ownership, reminders, priority, and notes",
        body: (
          <>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-ownership.png"}
              alt="The care gap ownership form with callouts for reassigning the gap to an owner or team, setting a reminder date, setting an optional priority, choosing a status, and a Notes box."
              caption="Reassign the gap, set a reminder date, set priority and status, and leave notes."
            />
            <ul>
              <li><strong>Reassign the gap.</strong> Care gaps can be reassigned to other users or teams. Select whether you are assigning to an individual or a team, then select that owner to give them the gap to work.</li>
              <li><strong>Reminder date.</strong> To remind yourself to come back to a gap, set a reminder date. That member reappears at the top of your table on that date, and the care gap you need to revisit is highlighted in red.</li>
              <li><strong>Priority.</strong> Optional. Set a priority so you can filter for the gaps you want to work.</li>
              <li><strong>Status.</strong> All new gaps default to a status of <strong>New</strong>. Optional — set a status for the gap, then filter on it to work a specific set of gaps.</li>
              <li><strong>Notes.</strong> Any user entering this gap can see these notes. Record what has been done to address the gap so it hands off cleanly to others. Notes stay fully editable until the gap is completed.</li>
            </ul>

            <h3>Completing a care gap</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-complete.png"}
              alt="Completing a care gap — the Status field set to Complete, which reveals two additional fields below: Completion Status and Pause Intervention Generation Until."
              caption="Setting Status to Complete reveals a required Completion Status and an optional pause date."
            />
            <ul>
              <li>To close a gap, select a status of <strong>Complete</strong>. Selecting this status opens two additional fields below.</li>
              <li><strong>Completion Status</strong> is required — select the completion status of the gap.</li>
              <li><strong>Pause Intervention Generation Until</strong> is optional. If you need to close a gap and don't want it to reappear for a period of time, set a pause date: the gap will not regenerate, even if it is still open, until the date you select.</li>
            </ul>
          </>
        ),
      },
      {
        id: "bulk",
        title: "Bulk care gap actions",
        body: (
          <>
            <p>If you'd like to send more than one action at a time, or change users, priorities, or statuses on a group of gaps, use the bulk operations menu.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-bulk.png"}
              alt="The Care Gaps table with bulk operations active — callouts for selecting gaps using the checkboxes on the left, the bulk-select menu for ownership, priority and status with an Update Selected button, and the four bulk action icons."
              caption="Select gaps with the checkboxes, then change owner, priority, or status — or send a bulk action with the same four icons."
            />
            <ul>
              <li>Use the checkboxes on the left of the table to select multiple gaps, then pick your action.</li>
              <li>Use the bulk-select menu to change the owner, priority, or status of all selected gaps. Don't forget to save by clicking <strong>Update Selected</strong>.</li>
            </ul>

            <h3>Bulk faxing &amp; bulk EHR messaging tips</h3>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "care-gaps-bulk-fax.png"}
              alt="The Act on this Care Gap modal queuing an action on three selected care gaps, on the Fax tab, with callouts explaining recipient type and provider taxonomy with a maximum of four options."
              caption="For bulk faxes and EHR messages you select a type of provider rather than a specific doctor, since members all have different providers."
            />
            <ul>
              <li>You can select up to 4 taxonomies — the fax/EHR will preference the send in the order of taxonomies selected. The system searches each member profile for the provider type you're trying to reach and executes accordingly; the first one found with an actionable pathway (for example, a fax number on file) receives the action.</li>
              <li>Alternatively, choose to fax/EHR the provider who most recently wrote the prescription.</li>
              <li>The fax number defaults to what's on file from the NPI registry. EHR messages go directly through Direct Trust.</li>
              <li><strong>Tip.</strong> Fax numbers can be updated in each provider's profile. If a fax number is missing or you find an updated one, save it there and make it primary — it'll be used permanently.</li>
              <li>Every fax/EHR message shows as its own line item in the individual care gap, even if sending in bulk.</li>
            </ul>
          </>
        ),
      },
      {
        id: "manage-gaps",
        title: "Managing your Care Gap table",
        body: (
          <>
            <p>It's easy to get lost in a sea of care gaps. Use filters to find exactly which ones you want to work on. As mentioned, when you enter, the default filter is <strong>Me</strong> — meaning you only see members for which there is at least one gap assigned to you or a team you are on.</p>
            <Hint type="info" title="Filters pull on a member level">
              <p>Filters pull on a member level, just like how the table is organized. Filtering for any of the below pulls all members for which you have an assigned care gap that matches the filter. You'll see all open care gaps for that member by default, even if some are assigned to someone else, have a different status, or are from other rules — this is intentional, to give you a holistic view.</p>
            </Hint>
            <h3>Care gap filters</h3>
            <ul>
              <li><strong>Rule Category</strong> — all gaps generated from rules in a specific category.</li>
              <li><strong>Rule Name</strong> — all gaps generated from a specific rule.</li>
              <li><strong>Care Gap</strong> — all gaps that meet a specific care gap text.</li>
              <li><strong>Status</strong> — all gaps that meet a specific status (multi-select).</li>
              <li><strong>Priority</strong> — all gaps that meet a specific priority (multi-select).</li>
            </ul>
            <p>You can also use the search bar and type a patient ID to see only that patient's gaps. Note: the entire patient ID is required for the search to succeed.</p>
          </>
        ),
      },
      {
        id: "work-queue",
        title: "Work Queue (Beta)",
        body: (
          <Hint type="warning" title="In beta">
            <p>Work Queue surfaces a subset of care gaps for the Quality Pharmacy team to work through during the day. It is under beta testing and is not a feature being widely used by all OneDash users. If you would like to learn more about the Work Queue, please submit a ticket with your questions.</p>
          </Hint>
        ),
      },
      {
        id: "actions-tab",
        title: "The Actions tab",
        body: (
          <>
            <p><strong>The Actions tab is where you can see every action taken over time.</strong> Every action taken in OneDash generates an individual row here.</p>
            <h3>What are care gap actions?</h3>
            <ul>
              <li>Care gap actions appear per patient per action — e.g. sending 10 faxes at once creates 10 actions, one per care gap.</li>
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
                  <li><strong>Text messages &amp; tracked calls</strong> — hover for the message that was sent.</li>
                  <li><strong>MD Appointments</strong> — hover to see the type of appointment and the date scheduled.</li>
                  <li><strong>Mail sent</strong> — hover to see where that mail went.</li>
                  <li><strong>Outbound and Inbound calls</strong> — hover to see call notes.</li>
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
