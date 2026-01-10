#!/bin/bash
CURRENT_YEAR=$(date +%Y)

# Update _redirects file for /manual redirect
sed -i "s|/frc[0-9]\{4\}/Manual/[0-9]\{4\}GameManual|/frc$CURRENT_YEAR/Manual/${CURRENT_YEAR}GameManual|g" public/_redirects
