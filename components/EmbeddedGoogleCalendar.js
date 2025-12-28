export default function EmbeddedGoogleCalendar({
  calendarEmbedUrl = "https://calendar.google.com/appointments/schedules/AcZssZ20kzIhtACNpQCMPvERahaZmkUOfe47XP2Oz72YUXE4Uj21gSvyKju1bKWtj7mjr14xA-jqzt1-",
  timezone = null // Optional: pass a specific timezone like 'America/New_York'
}) {
  // Build the final URL with timezone if provided
  const finalCalendarUrl = timezone
    ? `${calendarEmbedUrl}&timezone=${encodeURIComponent(timezone)}`
    : calendarEmbedUrl;
  if (!calendarEmbedUrl || calendarEmbedUrl.includes("YOUR_CALENDAR_ID")) {
    return (
      <div className="bg-editorial-paper border-2 border-editorial-border p-6 text-center">
        <h3 className="font-semibold text-editorial-ink mb-2 font-serif">Setup Required</h3>
        <p className="text-sm text-editorial-muted">
          Replace the calendar URL in the code with your Google Calendar embed URL.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-editorial-paper border-2 border-editorial-border p-3 sm:p-4">
      <div className="mb-3 sm:mb-4">
        <h3 className="font-semibold text-editorial-ink mb-1 sm:mb-2 text-sm sm:text-base font-serif">Available Time Slots</h3>
        <p className="text-xs sm:text-sm text-editorial-muted">
          Select a time that works best for you.
        </p>
      </div>

      <div className="w-full">
        <div className="bg-editorial-white border-2 border-editorial-border overflow-hidden">
          {/* Accessibility notice for screen readers */}
          <div className="sr-only">
            <p>This is a Google Calendar booking form. You can use the form below to schedule an appointment. All form fields are properly labeled for accessibility.</p>
          </div>

          {/* Mobile-optimized container */}
          <div className="iframe-container relative overflow-x-auto">
            <div className="min-w-full">

              <iframe
                src={finalCalendarUrl}
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  display: 'block',
                  minHeight: '500px',
                  minWidth: '320px'
                }}
                frameBorder="0"
                scrolling="yes"
                title="Google Calendar Booking - Schedule your discovery call"
                className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[600px]"
                aria-label="Google Calendar appointment booking form with name, email, and time selection fields"
                role="application"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Fallback link for accessibility */}
          <div className="sr-only">
            <p>If you have trouble using the calendar above, you can also <a href={finalCalendarUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">open the booking form in a new window</a>.</p>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 text-center border-t border-editorial-border pt-4">
        <p className="text-xs text-editorial-muted uppercase tracking-wider">
          Powered by Google Calendar • Secure booking process
        </p>
      </div>
    </div>
  );
}
