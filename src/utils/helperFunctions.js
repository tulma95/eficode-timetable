const formatDate = (date) => {
  return date.toLocaleTimeString([],
    { hour12: false, hour: '2-digit', minute: '2-digit' })
}

export { formatDate }