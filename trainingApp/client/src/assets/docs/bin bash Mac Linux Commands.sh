#!/bin/bash

# Mac/Linux Commands to Create Complete React Project Structure

# Run these commands from your project root directory
 
# Navigate to src directory

cd src
 
# Create main folders

mkdir -p components pages store services utils hooks styles assets
 
# Create component subfolders

mkdir -p components/{ui,layout,forms,common}
 
# Create pages subfolders

mkdir -p pages/{auth,dashboard,patients,users}
 
# Create store subfolders (Redux structure)

mkdir -p store/{actions,reducers,middleware}
 
# Create asset subfolders

mkdir -p assets/{images,icons,fonts}
 
# ========================================

# CREATE ALL FILES

# ========================================
 
# Create component/ui files

touch components/ui/{Button.jsx,Input.jsx,Modal.jsx,Loading.jsx,Alert.jsx,Card.jsx,Table.jsx,Pagination.jsx,SearchBox.jsx,Dropdown.jsx,index.js}
 
# Create component/layout files

touch components/layout/{Header.jsx,Sidebar.jsx,Footer.jsx,Layout.jsx,Breadcrumb.jsx,index.js}
 
# Create component/forms files

touch components/forms/{LoginForm.jsx,RegisterForm.jsx,PatientForm.jsx,UserForm.jsx,PasswordForm.jsx,SearchForm.jsx,index.js}
 
# Create component/common files

touch components/common/{ErrorBoundary.jsx,ProtectedRoute.jsx,LoadingSpinner.jsx,ConfirmModal.jsx,NotFound.jsx,Unauthorized.jsx,index.js}
 
# Create main component index file

touch components/index.js
 
# Create pages/auth files

touch pages/auth/{Login.jsx,Register.jsx,ForgotPassword.jsx,ResetPassword.jsx,VerifyEmail.jsx,index.js}
 
# Create pages/dashboard files

touch pages/dashboard/{Dashboard.jsx,AdminDashboard.jsx,UserDashboard.jsx,PatientDashboard.jsx,index.js}
 
# Create pages/patients files

touch pages/patients/{PatientList.jsx,PatientDetails.jsx,AddPatient.jsx,EditPatient.jsx,PatientProfile.jsx,index.js}
 
# Create pages/users files

touch pages/users/{UserList.jsx,UserDetails.jsx,AddUser.jsx,EditUser.jsx,UserProfile.jsx,index.js}
 
# Create main pages index file

touch pages/index.js
 
# Create store/actions files

touch store/actions/{authActions.js,patientActions.js,userActions.js,uiActions.js,dashboardActions.js,actionTypes.js,index.js}
 
# Create store/reducers files

touch store/reducers/{authReducer.js,patientReducer.js,userReducer.js,uiReducer.js,dashboardReducer.js,rootReducer.js,index.js}
 
# Create store/middleware files

touch store/middleware/{authMiddleware.js,apiMiddleware.js,errorMiddleware.js,loggerMiddleware.js,index.js}
 
# Create main store files

touch store/{store.js,index.js}
 
# Create service files

touch services/{api.js,authService.js,patientService.js,userService.js,dashboardService.js,uploadService.js,index.js}
 
# Create utility files

touch utils/{constants.js,validators.js,helpers.js,formatters.js,storage.js,permissions.js,dateUtils.js,apiUtils.js,index.js}
 
# Create custom hook files

touch hooks/{useAuth.js,useApi.js,useLocalStorage.js,usePagination.js,useDebounce.js,useToggle.js,useForm.js,index.js}
 
# Create style files

touch styles/{globals.css,variables.css,components.css,utilities.css,responsive.css,theme.css,bootstrap-overrides.css,index.css}
 
# Create placeholder files in asset folders

touch assets/images/.gitkeep assets/icons/.gitkeep assets/fonts/.gitkeep
 
# Create main App files (only if they don't exist)

[ ! -f App.jsx ] && touch App.jsx

[ ! -f App.css ] && touch App.css

[ ! -f main.jsx ] && touch main.jsx
 
# Color codes for output

RED='\033[0;31m'

GREEN='\033[0;32m'

YELLOW='\033[1;33m'

BLUE='\033[0;34m'

CYAN='\033[0;36m'

WHITE='\033[1;37m'

GRAY='\033[0;90m'

NC='\033[0m' # No Color
 
# Display success message

echo ""

echo -e "${GREEN}=====================================================${NC}"

echo -e "${GREEN}   React Project Structure Created Successfully!${NC}"

echo -e "${GREEN}=====================================================${NC}"

echo ""

echo -e "${YELLOW}Total files created:${NC}"

echo -e "${CYAN}• Component files: 30+${NC}"

echo -e "${CYAN}• Page files: 20+${NC}"

echo -e "${CYAN}• Redux files: 15+${NC}"

echo -e "${CYAN}• Service files: 7${NC}"

echo -e "${CYAN}• Utility files: 9${NC}"

echo -e "${CYAN}• Hook files: 8${NC}"

echo -e "${CYAN}• Style files: 8${NC}"

echo ""

echo -e "${YELLOW}Folder structure:${NC}"

echo -e "${WHITE}src/${NC}"

echo -e "${GRAY}├── components/          # Reusable UI components${NC}"

echo -e "${GRAY}│   ├── ui/             # Basic UI components (11 files)${NC}"

echo -e "${GRAY}│   ├── layout/         # Layout components (6 files)${NC}"

echo -e "${GRAY}│   ├── forms/          # Form components (7 files)${NC}"

echo -e "${GRAY}│   └── common/         # Common components (7 files)${NC}"

echo -e "${GRAY}├── pages/              # Page components${NC}"

echo -e "${GRAY}│   ├── auth/           # Authentication pages (6 files)${NC}"

echo -e "${GRAY}│   ├── dashboard/      # Dashboard pages (5 files)${NC}"

echo -e "${GRAY}│   ├── patients/       # Patient CRUD pages (6 files)${NC}"

echo -e "${GRAY}│   └── users/          # User management pages (6 files)${NC}"

echo -e "${GRAY}├── store/              # Redux store${NC}"

echo -e "${GRAY}│   ├── actions/        # Redux actions (7 files)${NC}"

echo -e "${GRAY}│   ├── reducers/       # Redux reducers (7 files)${NC}"

echo -e "${GRAY}│   └── middleware/     # Custom middleware (5 files)${NC}"

echo -e "${GRAY}├── services/           # API services (7 files)${NC}"

echo -e "${GRAY}├── utils/              # Helper functions (9 files)${NC}"

echo -e "${GRAY}├── hooks/              # Custom React hooks (8 files)${NC}"

echo -e "${GRAY}├── styles/             # CSS files (8 files)${NC}"

echo -e "${GRAY}└── assets/             # Images, fonts, etc.${NC}"

echo ""

echo -e "${YELLOW}Next steps:${NC}"

echo -e "${WHITE}1. Install dependencies: npm install${NC}"

echo -e "${WHITE}2. Add Bootstrap and Font Awesome CDN to index.html${NC}"

echo -e "${WHITE}3. Start coding your components!${NC}"

echo ""

echo -e "${GREEN}=====================================================${NC}"
 
# Show directory tree (if tree command is available)

echo ""

echo -e "${GREEN}Directory structure created:${NC}"

if command -v tree &> /dev/null; then

    tree -a -I 'node_modules|.git' --dirsfirst

else

    echo -e "${YELLOW}Note: Install 'tree' command to see directory structure:${NC}"

    echo -e "${GRAY}  macOS: brew install tree${NC}"

    echo -e "${GRAY}  Linux: sudo apt install tree${NC}"

    echo ""

    echo -e "${CYAN}Alternative - show folders:${NC}"

    find . -type d | head -20

fi
 
# Count total files created

echo ""

echo -e "${BLUE}Summary:${NC}"

echo -e "${CYAN}Total folders created: $(find . -type d | wc -l)${NC}"

echo -e "${CYAN}Total files created: $(find . -type f | wc -l)${NC}"
 
