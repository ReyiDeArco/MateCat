const IconSettings = ({
  width = '42',
  height = '42',
  style,
  color = '#000000',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={`${width}px`}
      height={`${height}px`}
      style={style}
    >
      <path
        fill={color}
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        d="M19.92 8.882c-.032-.281-.36-.492-.643-.492a2.22 2.22 0 01-2.068-1.37 2.225 2.225 0 01.558-2.47.555.555 0 00.061-.753 9.887 9.887 0 00-1.583-1.599.556.556 0 00-.76.062c-.595.66-1.664.904-2.491.56a2.22 2.22 0 01-1.35-2.17.554.554 0 00-.49-.583A9.975 9.975 0 008.906.06a.556.556 0 00-.494.571 2.223 2.223 0 01-1.369 2.132c-.816.334-1.878.09-2.473-.563a.557.557 0 00-.754-.064A9.924 9.924 0 002.2 3.735a.556.556 0 00.06.76c.695.63.92 1.631.558 2.493-.345.821-1.198 1.35-2.174 1.35a.543.543 0 00-.577.49c-.088.751-.089 1.516-.004 2.273.031.282.369.491.655.491.87-.022 1.705.517 2.056 1.37.349.851.124 1.844-.559 2.47a.555.555 0 00-.06.753c.464.591.996 1.13 1.58 1.6a.556.556 0 00.76-.061c.598-.661 1.668-.906 2.491-.56a2.216 2.216 0 011.352 2.168.555.555 0 00.49.584 9.931 9.931 0 002.248.006.556.556 0 00.495-.572 2.22 2.22 0 011.367-2.131c.822-.336 1.88-.09 2.474.563.198.215.524.24.754.063a9.947 9.947 0 001.616-1.598.555.555 0 00-.06-.76 2.214 2.214 0 01-.559-2.492 2.237 2.237 0 012.044-1.354l.123.003a.556.556 0 00.585-.49 10 10 0 00.005-2.272zm-9.913 4.463a3.336 3.336 0 01-3.333-3.333 3.336 3.336 0 013.333-3.332 3.336 3.336 0 013.333 3.332 3.336 3.336 0 01-3.333 3.333z"
        transform="translate(-1261 -285) translate(1261 285)"
      />
    </svg>
  )
}

export default IconSettings
