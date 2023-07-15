export const formattedDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();

  // Check if the date is today
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return formatTime(date);
  }

  // Check if the date is yesterday
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return `Yesterday, ${formatTime(date)}`;
  }

  // Return the date and time in a specific format
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return `${date.toLocaleDateString(undefined, options)}, ${formatTime(date)}`;
};

function formatTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleTimeString(undefined, options);
}

export const getTimeAgo = (awsDate: string) => {
  const date = new Date(awsDate);
  const now = new Date();
  const diff = Math.abs(now.getTime() - date.getTime()) / 1000; // Get the time difference in seconds

  if (diff < 60) {
    return `${Math.floor(diff)} seconds ago`;
  } else if (diff < 60 * 60) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diff < 60 * 60 * 24) {
    const hours = Math.floor(diff / (60 * 60));
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    const days = Math.floor(diff / (60 * 60 * 24));
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
};
