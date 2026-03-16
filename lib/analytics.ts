import posthog from "posthog-js"

export function trackCTAClick(location: string, label: string) {
  posthog.capture("cta_clicked", { cta_location: location, cta_label: label })
}

export function trackFormStarted() {
  posthog.capture("contact_form_started")
}

export function trackFormFieldFocus(field: string) {
  posthog.capture("contact_form_field_focus", { field })
}

export function trackFormSubmitted(organisation: string) {
  posthog.capture("contact_form_submitted", { organisation })
}

export function trackFormError(type: string) {
  posthog.capture("contact_form_error", { error_type: type })
}

export function trackFAQOpened(question: string, index: number) {
  posthog.capture("faq_opened", { question, index })
}

export function trackSectionViewed(sectionId: string) {
  posthog.capture("section_viewed", { section: sectionId })
}
