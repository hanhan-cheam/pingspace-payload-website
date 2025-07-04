import { Box, Button, Skeleton, SxProps, Theme, Tooltip, Typography } from '@mui/material'
import { HTMLMotionProps, motion } from 'motion/react'
import { ComponentProps, ReactElement, ReactNode, useMemo } from 'react'

type TCustomButtonProps = Omit<ComponentProps<typeof Button>, 'sx'> & {
  initLoading?: boolean
  loading?: boolean
  skeleton?: ReactElement
  tooltipTitle?: { hasAccess?: ReactNode; noAccess?: ReactNode }
  hasAccess?: boolean
  boxSx?: SxProps<Theme>
  sx?: SxProps<Theme>
} & HTMLMotionProps<'button'>

const DefaultTooltipTitleForNoAccess = () => (
  <div>
    <Typography fontSize={12}>Sorry, you do not have permission to perform this action.</Typography>
  </div>
)

export const CustomButton = ({
  initLoading,
  loading,
  skeleton,
  tooltipTitle: tooltipTitleProps = {
    hasAccess: '',
    noAccess: <DefaultTooltipTitleForNoAccess />,
  },
  hasAccess = true,
  boxSx = [],
  sx = [],
  ref,
  ...props
}: TCustomButtonProps) => {
  const {
    hasAccess: tooltipWhenHasAccess = '',
    noAccess: tooltipWhenNoAccess = <DefaultTooltipTitleForNoAccess />,
  } = tooltipTitleProps

  const disabled = useMemo(() => props.disabled || !hasAccess, [hasAccess, props.disabled])

  return initLoading ? (
    skeleton ? (
      skeleton
    ) : (
      <Skeleton variant="rectangular" width={45} height={100}></Skeleton>
    )
  ) : (
    <Tooltip
      disableInteractive
      enterTouchDelay={disabled ? 0 : 700} // to enable tooltip on touch devices, when button is disabled
      title={hasAccess ? tooltipWhenHasAccess : tooltipWhenNoAccess}
    >
      {/* Why a wrapper is needed: https://mui.com/material-ui/react-tooltip/#disabled-elements */}
      <Box
        component="span"
        sx={[
          // Reference: https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
          ...(Array.isArray(boxSx) ? boxSx : [boxSx]),
          {
            cursor: hasAccess ? 'default' : 'not-allowed',
            width: props.fullWidth ? '100%' : 'auto',
          },
        ]}
      >
        <Button
          component={motion.button}
          ref={ref}
          loading={loading}
          {...props}
          sx={[
            // Reference: https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
            ...(Array.isArray(sx) ? sx : [sx]),
            disabled && {
              '& .MuiButton-startIcon': (theme) => ({
                // color: theme.vars.palette.text.disabled,
              }),
            },
          ]}
          disabled={disabled}
          type="button"
        >
          {props.children}
        </Button>
      </Box>
    </Tooltip>
  )
}
