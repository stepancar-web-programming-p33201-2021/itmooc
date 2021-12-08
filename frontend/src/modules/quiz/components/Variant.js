import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Grid, Snackbar, Alert, Slide } from '@mui/material';

import { VariantButton } from '.';
import { MotionComponent } from '../../core/animate';

export default function Variant({ contents, answer }) {
    const backgroundColors = ['#2F6DAE', '#2C9CA6', '#8E44AD', '#ECA82C', '#E67E22', '#BDC3C7'];
    const wrongColor = '#E63946';
    const rightColor = '#62C370';

    const [chosen, setChosen] = useState(-1);
    const [open, setOpen] = useState(false);

    const chooseVariant = (i) => {
        setOpen(true);
        setChosen(i);
    };
    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                TransitionComponent={(props) => <Slide {...props} direction="up" />}
            >
                <Alert
                    onClose={() => setOpen(false)}
                    severity={chosen === answer ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                >
                    {chosen === answer ? 'ПРАВИЛЬНЫЙ' : 'НЕКОРРЕКТНЫЙ'}
                </Alert>
            </Snackbar>
            <Grid container spacing={1} flex={1}>
                {contents.map((content, i) => (
                    <Grid item sm={12} md key={i}>
                        <AnimatePresence>
                            {chosen === -1 && (
                                <MotionComponent style={{ height: '100%' }}>
                                    <VariantButton
                                        variant="contained"
                                        fullWidth
                                        backgroundColor={backgroundColors[i]}
                                        onClick={() => chooseVariant(i)}
                                    >
                                        {content}
                                    </VariantButton>
                                </MotionComponent>
                            )}
                            {i === chosen && i !== answer && (
                                <MotionComponent style={{ height: '100%' }}>
                                    <VariantButton
                                        variant="contained"
                                        fullWidth
                                        backgroundColor={wrongColor}
                                        onClick={() => chooseVariant(i)}
                                    >
                                        {content}
                                    </VariantButton>
                                </MotionComponent>
                            )}
                            {i === answer && chosen !== -1 && (
                                <MotionComponent style={{ height: '100%' }}>
                                    <VariantButton
                                        variant="contained"
                                        fullWidth
                                        backgroundColor={rightColor}
                                        onClick={() => chooseVariant(i)}
                                    >
                                        {content}
                                    </VariantButton>
                                </MotionComponent>
                            )}
                        </AnimatePresence>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

Variant.propTypes = {
    contents: PropTypes.arrayOf(PropTypes.string),
    answer: PropTypes.number
};
