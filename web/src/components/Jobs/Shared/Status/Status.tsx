const Status = ({ status, textClassName, iconClassName }) => {
  let bgColor, textColor, icon, label

  switch (status) {
    case 'available':
      bgColor = 'bg-green-100'
      textColor = 'text-green-600'
      icon = 'check_circle'
      label = 'Available'
      break
    case 'booked':
      bgColor = 'bg-yellow-100'
      textColor = 'text-yellow-600'
      icon = 'cancel'
      label = 'Booked'

      break
  }

  return (
    <div
      className={`mt-1 flex items-center justify-center px-3 py-1 rounded-full font-semibold uppercase ${bgColor} ${textColor} ${textClassName}`}
    >
      <span className={`icon mr-1 ${iconClassName}`}>{icon}</span> {label}
    </div>
  )
}

export default Status
