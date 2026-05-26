/* guide-articles-1.jsx
   Overview + Fundamentals + My Dashboard
*/

window.GUIDE_ARTICLES_1 = [
  // ─────────────────────────────────────────────────────────
  {
    id: "welcome",
    category: "overview",
    title: "Welcome to OneDash",
    desc: "Your clinical automation platform — identify care gaps, act on them, and track outcomes, all in one place.",
    updated: "Jan 7, 2026",
    sections: [
      {
        id: "intro",
        title: "What OneDash does",
        body: (
          <>
            <p><strong>OneDash is the solution that allows you to identify your care gaps, act on those gaps, and track your outcomes, all in one place</strong> — powered by Clair, the OneDash AI co-pilot.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "overview-1.png"}
              alt="OneDash architecture — Self Service, Clair, Analytics & ML, and a unified bidirectional data layer connected to Pharmacy Claims, Medical Claims, SDOH, FHIR/HL7, Inpatient Usage, EHR, and Custom Documents."
              caption="OneDash sits on a unified bidirectional data layer, fed by claims, clinical, and SDOH sources — surfaced through self-service tooling, Clair AI, and ready-made analytics."
            />
            <p>OneDash is built around three verbs: <strong>Identify, Act, Monitor.</strong> Everything in the platform maps to one of those phases.</p>
          </>
        ),
      },
      {
        id: "how-it-works",
        title: "How it works",
        body: (
          <>
            <p>As a clinical automation platform, we take the following five steps to provide you with real-time updates, actions, and insights that actively close care gaps in your population:</p>
            <PipelineSteps />
            <Hint type="success" title="One platform, one source of truth">
              <p>Every step happens inside OneDash — no exports, no spreadsheets, no separate vendor portals to reconcile.</p>
            </Hint>
          </>
        ),
      },
      {
        id: "next",
        title: "Where to next",
        body: (
          <>
            <Cards>
              <Card title="OneDash Features">A tour of every focus area — Identify, Act, Monitor.</Card>
              <Card title="OneDash Definitions">Plain-English glossary of rules, gaps, tags, and measures.</Card>
              <Card title="New User Account">Get logged in and set up MFA in five minutes.</Card>
            </Cards>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "features",
    category: "overview",
    title: "OneDash Features",
    desc: "A guided tour of every focus area in the platform.",
    updated: "Apr 14, 2026",
    sections: [
      {
        id: "tour",
        title: "Three focus areas",
        body: (
          <>
            <p>OneDash organizes everything around the same three verbs the rest of the platform uses. Use the tabs below to drill into each area.</p>
            <DocImage
              src={(window.UG_ASSET_BASE || "") + "features-1.png"}
              alt="A matrix mapping Identify, Act, and Monitor across Care Coordination, Finance, and Clinical Tools."
              caption="Each focus area touches all three product tracks: Care Coordination, Finance, and Clinical Tools."
            />
            <Tabs tabs={[
              {
                title: "Identify",
                body: <>
                  <h3>My Population / Individual Patient Pages</h3>
                  <ul>
                    <li>Follow specific patients for easy access to their unique health profiles.</li>
                    <li>Place a group of patients into a tag.</li>
                  </ul>
                  <h3>Population Browser</h3>
                  <ul>
                    <li>Create a patient cohort based on demographics, medications, quality measures, prescription details, cost, medical information, and social determinants of health.</li>
                  </ul>
                  <h3>Rules</h3>
                  <ul>
                    <li>Create rules to automatically scan a selected population for a set of parameters. Rules result in auto-generated care gaps that tell the user what the member may need to improve their health.</li>
                    <li>Rules can search for gaps or benchmarks around any data — pharmacy claims, spend, medical claims, lab values, SDOH.</li>
                  </ul>
                  <Hint type="success" title="Bidirectional EHR Connection">
                    <p>OneDash can connect to any EHR in a Health System or Retail Pharmacy with a bidirectional data layer, giving you real-time access to:</p>
                    <ul>
                      <li>Listen for appointments being scheduled with outpatient providers.</li>
                      <li>Listen for any kind of inpatient usage.</li>
                      <li>Query EHR systems for medical conditions, allergies, encounter notes, diagnostic reports, immunizations.</li>
                      <li>Connect to retail pharmacy databases for claims data on out-of-pocket or coupon payments.</li>
                    </ul>
                    <p>That data flows directly into rules — so you can <strong>automatically identify hospital discharges or missed medical appointments</strong> as they happen.</p>
                  </Hint>
                </>,
              },
              {
                title: "Act",
                body: <>
                  <h3>Communication solutions</h3>
                  <p>OneDash automates care gap identification, then gives you the tools to act on each gap directly from the platform.</p>
                  <Cards>
                    <Card title="Send EHR messages">Push notifications directly into a patient's profile in connected EHRs for a provider to address the care gap.</Card>
                    <Card title="AI Calling &amp; AI Texting">AI agents built for specific use cases (statin therapy, adherence) that operate inside the guardrails you set.</Card>
                    <Card title="Faxing">Customized fax templates with patient data pulled in. Bulk and automated faxing supported.</Card>
                  </Cards>

                  <h3>Automations</h3>
                  <p>If you're outnumbered by the care gaps in your queue, automate. Many gaps can be closed without a human ever touching them.</p>
                  <AutomationFunnelMock />
                  <p>Only members whose care gaps don't close through automation end up in a clinical user's manual queue — keeping your team focused on the patients who truly need the highest-touch outreach.</p>

                  <h3>Clinical solutions</h3>
                  <ul>
                    <li><strong>Vendor data pipeline.</strong> Identify care gaps in OneDash and send them seamlessly to your existing vendor solution.</li>
                    <li><strong>Clinical services.</strong> CaryHealth pharmacists work toward your goals inside OneDash, tracked the same way your own users are.</li>
                    <li><strong>CaryRx.</strong> CaryHealth's retail pharmacy, delivering to patients in all 50 states. Transfer Rx, place orders, and track delivery from any patient profile.</li>
                    <li><strong>Telehealth appointments.</strong> Connect members to same-day telehealth so care and medications get prescribed and delivered in one motion.</li>
                  </ul>
                </>,
              },
              {
                title: "Monitor",
                body: <>
                  <ul>
                    <li><strong>Financial Outcomes.</strong> Track ROI on any worked population — pharmacy spend, medical spend, or total.</li>
                    <li><strong>Clinical Outcomes.</strong> Adherence and inpatient utilization changes for any cohort.</li>
                    <li><strong>Quality Outcomes.</strong> Real-time daily calculations on HEDIS and Stars progress, plus the impact of your OneDash interventions.</li>
                    <li><strong>Intervention Statistics.</strong> Individual and team effort reports for every clinical program.</li>
                    <li><strong>Custom Reports.</strong> Request any report you need — we'll build it and add it to your Reports page.</li>
                  </ul>
                  <Hint type="success" title="Real-time vendor ROI">
                    <p>Unique to OneDash, you can track a population being acted on by another vendor and see real-time impact on spend and clinical outcomes — even if the work isn't happening in OneDash.</p>
                  </Hint>
                </>,
              },
            ]} />
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "definitions",
    category: "overview",
    title: "OneDash Definitions",
    desc: "A glossary of platform and clinical terms you'll see throughout OneDash.",
    updated: "Jan 23, 2026",
    sections: [
      {
        id: "onedash-terms",
        title: "OneDash terms",
        body: (
          <DataTable
            headers={["Term", "Definition"]}
            rows={[
              ["Category", "A collection of rules."],
              ["Care Gap", "Generated from a rule — a recommended action to take on an individual member."],
              ["Owner", "The user or team assigned to all activities related to a rule, automation, care gap, or action."],
              ["Parameter", "A defined string of filters with applied logic."],
              ["Population", "A cohort of members you'd like to apply a parameter to."],
              ["Rule", "A parameter applied to a specific population, run at a specified frequency to generate care gaps."],
              ["Run Frequency", "How often a rule is automatically re-run."],
              ["Tag", "A way to name and save a specific population of interest."],
            ]}
          />
        ),
      },
      {
        id: "general-clinical",
        title: "General clinical terms",
        body: (
          <DataTable
            headers={["Term", "Definition"]}
            rows={[
              [<code>PDC</code>, "Proportion of Days Covered — a CMS-adopted adherence measure; the percentage of days a patient has medication on hand."],
              ["Days Covered", "The number of days covered by a given medication or medication class."],
              ["Best End-of-Year PDC", "The highest possible PDC achievable by year-end, assuming every remaining day is covered by a medication in the measure's class."],
              ["Worst End-of-Year PDC", "The lowest possible PDC achievable by year-end, assuming no remaining days are covered."],
            ]}
          />
        ),
      },
      {
        id: "stars",
        title: "Star measures",
        body: (
          <>
            <p style={{ color: "var(--g-fg-3)", fontSize: 13.5 }}>Definitions from Acumen.</p>
            <DataTable
              headers={["Measure", "Definition"]}
              rows={[
                [<code>ADH-Diabetes</code>, "% of continuously enrolled Medicare Part D beneficiaries 18+ adherent across diabetes med classes: BG, SFU, TZD, DPP-4, GIP/GLP-1, MEG, and SGLT2 inhibitors."],
                [<code>ADH-RAS</code>, "% of CE Medicare Part D beneficiaries 18+ adherent to RAS antagonists (ACE inhibitors, ARBs, direct renin inhibitors)."],
                [<code>ADH-Statin</code>, "% of CE Medicare Part D beneficiaries 18+ adherent to statins."],
                [<code>SUPD</code>, "% of CE Medicare Part D beneficiaries ages 40–75 dispensed diabetes medications who received a statin during the measurement period."],
                [<code>COB</code>, "% of CE Medicare Part D beneficiaries 18+ with concurrent use of prescription opioids and benzodiazepines during the measurement period."],
                [<code>Poly-ACH</code>, "% of CE Medicare Part D beneficiaries 65+ with concurrent use of two or more unique anticholinergic medications."],
              ]}
            />
          </>
        ),
      },
      {
        id: "hedis",
        title: "HEDIS measures",
        body: (
          <>
            <p style={{ color: "var(--g-fg-3)", fontSize: 13.5 }}>Definitions from HEDIS technical specs.</p>
            <DataTable
              headers={["Measure", "Definition"]}
              rows={[
                [<code>AMR</code>, "Asthma Medication Ratio — % of members 5–64 with persistent asthma whose ratio of controller medications to total asthma meds is 0.50 or greater during the measurement year."],
                [<code>COU</code>, <>Risk of Continued Opioid Use — two rates: (1) members with ≥15 days of opioids in a 30-day period, (2) members with ≥31 days in a 62-day period. <em>Lower rate is better.</em></>],
                [<code>HDO</code>, <>Use of Opioids at High Dosage — % of members 18+ on ≥90 MME for ≥15 days during the measurement year. <em>Lower rate is better.</em></>],
                [<code>PBH</code>, "Persistence of Beta-Blocker Treatment After a Heart Attack — % of members 18+ hospitalized with AMI who received persistent beta-blocker treatment for 180 days post-discharge."],
                [<code>PCE</code>, "Pharmacotherapy Management of COPD Exacerbation — two rates: systemic corticosteroid dispensed within 14 days, and bronchodilator within 30 days, of the qualifying event."],
                [<code>SAA</code>, "Adherence to Antipsychotic Medications for Individuals with Schizophrenia — % 18+ with schizophrenia who remained on an antipsychotic for ≥80% of the treatment period."],
                [<code>SPC</code>, "Statin Therapy for Patients with CVD — males 21–75 and females 40–75 with ASCVD: (1) received high/moderate-intensity statin, (2) ≥80% adherence."],
                [<code>SPD</code>, "Statin Therapy for Patients with Diabetes — members 40–75 with diabetes without ASCVD: (1) received any-intensity statin, (2) ≥80% adherence."],
                [<code>UOP</code>, <>Use of Opioids From Multiple Providers — three rates covering ≥4 prescribers, ≥4 pharmacies, and both. <em>Lower rate is better on all three.</em></>],
              ]}
            />
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "release-updates",
    category: "overview",
    title: "Release Updates",
    desc: "What's new, what changed, and what's been fixed across OneDash releases.",
    updated: "Mar 13, 2026",
    sections: [
      {
        id: "latest",
        title: "Latest releases",
        body: (
          <>
            <Release ver="2.4" date="March 13, 2026" defaultOpen>
              <h4>New features</h4>
              <ul>
                <li><strong>Configurable communication schedules.</strong> Pick the exact days of the week your automated AI calls and texts go out. Messages triggered on an "off" day are queued and sent on the next approved day.</li>
                <li><strong>Smart Delivery.</strong> No duplicate sends within a day, configurable per-member daily caps, and priority ranking so the most urgent message always lands first when a cap is reached.</li>
              </ul>
              <h4>Enhancements</h4>
              <ul>
                <li>Expanded FCC communication windows to all forms of patient communication.</li>
                <li>Taxonomy selection and order UIs now show in sequential order.</li>
                <li>Enhanced large-scale Patient ID filtering in Population Browser with a limiter to prevent overly long load times.</li>
                <li>Yearly filters added to Care Gaps and Actions tabs in the patient profile.</li>
                <li>Automatic batch faxing enhancements.</li>
              </ul>
              <h4>Bug fixes</h4>
              <ul>
                <li>Fixed AI appointment scheduler creating minor overlaps — now ensures clean gaps between bookings.</li>
                <li>Reinforced fix for AI calls to ensure they never execute before allowable FCC/regulatory call times.</li>
                <li>Corrected scaling on Work Tablet Mode.</li>
                <li>Fixed date-selector bugs and duplicate-row/whitespace glitches in CMR and Care Gap Statistics tables.</li>
                <li>Manually created gaps no longer auto-renamed to "manual" — retain their designated titles.</li>
              </ul>
            </Release>
            <Release ver="2.3" date="January 29, 2026">
              <h4>New features</h4>
              <ul>
                <li><strong>4 new specialized fax templates</strong> for high-cost and non-formulary medication requests.</li>
                <li>CPD posts to Care Gap notes: when a gap enters a CPD, a note is auto-posted to that care gap.</li>
                <li><strong>Automated FCC Compliance Guardrails.</strong> All scheduled communications now adhere to FCC regulations automatically; out-of-hours triggers are smart-queued.</li>
              </ul>
              <h4>Enhancements</h4>
              <ul>
                <li>New Medication Reversal AI Agent — identifies reversal agents and dosage guidelines for high-pressure scenarios.</li>
                <li>Two new comprehensive non-formulary / trade review reports.</li>
              </ul>
            </Release>
            <Release ver="2.2" date="December 22, 2025">
              <h4>New features</h4>
              <ul>
                <li>Simplified Work Queue in the Care Gaps page.</li>
                <li>Re-designed call logging with smarter outcome capture.</li>
                <li>Batch faxing available — checkbox at schedule time consolidates per-provider/pharmacy.</li>
              </ul>
              <h4>Enhancements</h4>
              <ul>
                <li>OneDash design refresh.</li>
                <li>Member-level medical claims spend graphs added — adapts to active filters.</li>
                <li>Secondary ICD codes now visible in the member-level medical claims tab.</li>
                <li>Population Browser filter refactor with search bar and improved organization.</li>
                <li>New dashboard widget: failed communications.</li>
              </ul>
            </Release>
            <Release ver="2.1.0" date="October 9, 2025">
              <h4>New features</h4>
              <ul>
                <li>Pharmacy faxing available — separate templates for refill requests directly to pharmacies.</li>
              </ul>
              <h4>Enhancements</h4>
              <ul>
                <li>Patient demographics: up to 4 phone numbers, emails, addresses per patient. First two fields are permanent records; last two are user-editable.</li>
                <li>Tag-to-Plan dates settable per-member from inside the tag page.</li>
                <li>Fax template previews can now show multiple pages.</li>
                <li>Care Gap statistics download restored (10K-line cap).</li>
              </ul>
            </Release>
            <Release ver="2.0.0" date="August 22, 2025">
              <h4>New features</h4>
              <ul>
                <li>Automation details overlay — see every patient in an automation, which step they're on, and whether their gap closed.</li>
                <li>Care gap action history overlay — view past and future scheduled actions; manual edits supported.</li>
              </ul>
            </Release>
            <Release ver="1.12.0" date="March 13, 2025">
              <h4>New features</h4>
              <ul>
                <li><strong>OneDash Dark Mode</strong> — toggle in the upper right.</li>
              </ul>
              <h4>Enhancements</h4>
              <ul>
                <li>Manual interventions reorganized per-member for a more holistic view.</li>
                <li>New OneDash logo and favicon.</li>
                <li>Pages are responsive down to 768×881 for tablet use.</li>
              </ul>
            </Release>
            <Release ver="1.10.0" date="December 17, 2024">
              <h4>New features</h4>
              <ul>
                <li><strong>Automate</strong> section in the left nav: build workflows (repeating action on a cadence) and funnels (stepped escalation).</li>
                <li><strong>Teams.</strong> Admins can create teams; members of a team can see manual interventions assigned to it.</li>
                <li><strong>Departments.</strong> Users and rule categories can be assigned to departments.</li>
              </ul>
              <h4>Enhancements</h4>
              <ul>
                <li>OneDash UI re-design.</li>
                <li>Bulk fax resend on failed faxes.</li>
                <li>Reports reorganized into three categories including custom-input reports.</li>
              </ul>
            </Release>
            <Release ver="1.9.0" date="November 7, 2024">
              <h4>New features</h4>
              <ul>
                <li>Release update banner shown on login.</li>
                <li>New-user tutorial mode walks new users through the left-nav tools.</li>
              </ul>
            </Release>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "new-user-account",
    category: "fundamentals",
    title: "New User Account",
    desc: "Getting set up on OneDash for the first time.",
    updated: "Aug 22, 2025",
    sections: [
      {
        id: "getting-started",
        title: "To get started",
        body: (
          <>
            <Steps>
              <Step title="Welcome email">
                <p>As a new user, you'll receive an introduction email welcoming you to OneDash.</p>
              </Step>
              <Step title="Password email">
                <p>Shortly after the welcome email, you'll get a second email to set your password. Follow the prompts. Once set, head to <code>onedash.caryrx.com</code> to sign in.</p>
              </Step>
              <Step title="Log in">
                <p>Your username is your email address; your password is what you just set. From the landing page, click <strong>Sign in</strong>.</p>
              </Step>
            </Steps>
            <Hint type="info" title="MFA is required">
              <p>OneDash requires multi-factor authentication. On your first login, you'll be asked for a phone number to receive an MFA code. After that first login, you can switch your MFA method to email if you prefer — it'll use your account email.</p>
            </Hint>
            <p>Log in and let's get started!</p>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "password-reset",
    category: "fundamentals",
    title: "Password Reset",
    desc: "Everyone forgets their password at some point.",
    updated: "Jan 13, 2026",
    sections: [
      {
        id: "reset",
        title: "Reset your password",
        body: (
          <Steps>
            <Step title="Request a reset">
              <p>Click <strong>Sign in</strong> on the main landing page. From the sign-in screen, follow the <strong>Forgot Password</strong> link and enter the email address you use to log in.</p>
            </Step>
            <Step title="Check your email">
              <p>You'll receive a reset link. Follow the prompts.</p>
            </Step>
            <Step title="Set a new password">
              <p>Pick a new password (and save it somewhere). On success, you'll see a confirmation notice.</p>
            </Step>
            <Step title="Log back in">
              <p>Head back to <code>onedash.caryrx.com</code> and do amazing things.</p>
            </Step>
          </Steps>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "support",
    category: "fundamentals",
    title: "Support",
    desc: "Need help? Here's how to reach us.",
    updated: "Feb 13, 2024",
    sections: [
      {
        id: "contact",
        title: "Contact",
        body: (
          <>
            <div style={{ padding: 28, background: "var(--g-card-bg)", border: "1px solid var(--g-border)", borderRadius: 12, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--g-accent-bg)", color: "var(--g-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700, color: "var(--g-fg-3)" }}>Email</div>
                <a href="mailto:OneDash@caryrx.com" style={{ fontSize: 22, fontWeight: 700, color: "var(--g-fg-1)" }}>OneDash@caryrx.com</a>
              </div>
            </div>
            <p style={{ marginTop: 18 }}>The OneDash team monitors this inbox during business hours. For platform questions, custom report requests, new tags, or anything else, send a ticket and we'll get back to you.</p>
          </>
        ),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: "my-dashboard",
    category: "product-guide",
    title: "My Dashboard",
    desc: "Your 1,000-foot customizable view of OneDash.",
    updated: "Dec 12, 2025",
    sections: [
      {
        id: "welcome",
        title: "Welcome to your Dashboard",
        body: (
          <>
            <p><strong>The Dashboard is your customizable view of the most important information you want to monitor.</strong></p>
            <DashboardMock />
          </>
        ),
      },
      {
        id: "use",
        title: "Customize the layout",
        body: (
          <Steps>
            <Step title="Open the customizer">
              <p>Click <strong>Customize</strong>, then <strong>+ Add new</strong>.</p>
            </Step>
            <Step title="Pick a widget">
              <p>Select the widget you want from the gallery.</p>
            </Step>
            <Step title="Place and resize">
              <p>Drag and drop the new widget where you'd like it. Resize it however you want.</p>
            </Step>
            <Step title="Close">
              <p>Click <strong>Close</strong> when you're done.</p>
            </Step>
          </Steps>
        ),
      },
      {
        id: "profile-search",
        title: "Profile search",
        body: (
          <Hint type="info" title="Profile search is your go-to lookup tool">
            <p>This is the only permanent widget — it lives in the top-right corner of your Dashboard. Type a name, DOB, ID number, or NPI to find any patient or provider in OneDash and jump straight to their page.</p>
          </Hint>
        ),
      },
    ],
  },
];
