# Generate Part Scoring — v5.4.0 (pilot)

- Existing UI retained; Generate Part precedes Generate Note in the RESULT / EMAIL action row.
- Scores are engineering **evidence compatibility** values on a 0–95 scale. They are NOT statistical probabilities or claim approvals.
- Input context: product family/model, symptom, checklist responses. Unanswered and Not Test items are excluded from positive evidence.
- CID, conflicting answers, recovery/FOP and confirmed Dispatch results from the existing Decision Engine take priority.
- Model-specific No Power with five required eliminations yields 80/100 Mainboard and retains BitLocker reminder.
- Network and keyboard use limited explicit evidence mapping. Ambiguous outcomes yield Suspect or Continue Troubleshooting, never unconditional Dispatch.
- Unknown symptoms or weak evidence yield Continue Troubleshooting with explanation/next actions, without inventing a percentage.
- Candidate scores are NOT normalized into a distribution (several parts may have high scores).
- The info icon includes candidate scores and Next Actions. After any checklist modification, click Generate Part again to refresh; stale scores are never kept.
- Legacy automatic Conclusion remains until Generate Part is clicked; the button performs a new evidence-scoring analysis.
- Existing Generate Note and Email generation are unchanged and may use different legacy review rules; their output is not a statistical scoring explanation.
- Not production calibrated: require model/FRU policies, service validation, representative closed repair cases, and browser testing before relying on new scores for actual part orders.
- Script: assets/js/scoring_engine.js; test: tools/test_scoring_engine.js.

## UI rollback within v5.4.0
The Generate Part action and percent-scored conclusion have been removed at user request. The active Conclusion uses only the existing real-time PDDecisionEngine (model, symptom, checklist). The scoring engine and test remain in the repository as inactive references and are not loaded in index.html. The four secondary action buttons are slightly smaller on desktop to keep the five remaining actions on a single row; small screens retain wrapping.
