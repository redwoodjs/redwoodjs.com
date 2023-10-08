import { ControlledFloatingFixieEmbed } from 'fixie/web'

const SidekickPage = () => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    width: '60%',
    height: '80%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  } as const

  return (
    <>
      <ControlledFloatingFixieEmbed
        visible={true}
        debug={false}
        // Eventually replace the following agentId with a more official RedwoodJS version
        agentId="keithtelliott/fixie-sidekick-template"
        agentSendsGreeting={true}
        chatTitle="Your RedwoodJS AI Sidekick, powered by Fixie.ai"
        style={style}
      />
    </>
  )
}

export default SidekickPage
