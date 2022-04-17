const Status = ({ status, textClassName, iconClassName }) => {
  let bgColor, textColor, icon, label

  switch (status) {
    case 'available':
      bgColor = 'bg-forest-100'
      textColor = 'text-forest-600'
      icon = 'check_circle'
      label = 'Available'
      break
    case 'booked':
      bgColor = 'bg-rw-100'
      textColor = 'text-rw-600'
      icon = 'cancel'
      label = 'Booked'

      break
  }

  return (
    <div
      className={`mt-1 flex items-center justify-center px-3 py-2 rounded-full font-semibold uppercase ${bgColor} ${textColor} ${textClassName}`}
    >
      <span className={`icon md-20 mr-1 ${iconClassName}`}>{icon}</span> {label}
    </div>
  )
}

export default Status
