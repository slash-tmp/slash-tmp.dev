/**
 * This mixin add the `notify` method to the context (can be used with the `inject` option).
 *
 * Use this mixin in the application root component to be able to use the `Toaster` component.
 */
const ToastProviderMixin = {
  provide() {
    return {
      notifications: this.notifications,
      notify: this.notify,
      dismissNotification: this.dismissNotification
    }
  },
  data: () => ({
    nextNotificationId: 0,
    notifications: [],
    automaticDismissTimeoutId: null
  }),
  methods: {
    /**
     * @param {string} text Notification text
     * @param {boolean} visuallyHidden Should the notification be hidden (only read by screen readers)
     */
    notify(text, visuallyHidden = false) {
      clearTimeout(this.automaticDismissTimeoutId)

      this.dismissNotification()
      this.notifications.push({
        id: this.nextNotificationId,
        text,
        visuallyHidden
      })
      this.nextNotificationId++

      // this.automaticDismissTimeoutId = setTimeout(
      //   this.dismissNotification,
      //   8000
      // )
    },
    dismissNotification() {
      this.notifications.splice(0, this.notifications.length)
    }
  }
}

export default ToastProviderMixin
