# PowerShell Commands to Create Complete React Project Structure
# Run these commands from your project root directory
 
# Navigate to src directory
Set-Location src
 
# Create main folders
New-Item -ItemType Directory -Path components, pages, store, services, utils, hooks, styles, assets
 
# Create component subfolders
New-Item -ItemType Directory -Path components\ui, components\layout, components\forms, components\common
 
# Create pages subfolders
New-Item -ItemType Directory -Path pages\auth, pages\dashboard, pages\patients, pages\users
 
# Create store subfolders (Redux structure)
New-Item -ItemType Directory -Path store\actions, store\reducers, store\middleware
 
# Create asset subfolders
New-Item -ItemType Directory -Path assets\images, assets\icons, assets\fonts
 
# ========================================
# CREATE ALL FILES
# ========================================
 
# Create component/ui files
New-Item -ItemType File -Path components\ui\Button.jsx, components\ui\Input.jsx, components\ui\Modal.jsx, components\ui\Loading.jsx, components\ui\Alert.jsx, components\ui\Card.jsx, components\ui\Table.jsx, components\ui\Pagination.jsx, components\ui\SearchBox.jsx, components\ui\Dropdown.jsx, components\ui\index.js
 
# Create component/layout files
New-Item -ItemType File -Path components\layout\Header.jsx, components\layout\Sidebar.jsx, components\layout\Footer.jsx, components\layout\Layout.jsx, components\layout\Breadcrumb.jsx, components\layout\index.js
 
# Create component/forms files
New-Item -ItemType File -Path components\forms\LoginForm.jsx, components\forms\RegisterForm.jsx, components\forms\PatientForm.jsx, components\forms\UserForm.jsx, components\forms\PasswordForm.jsx, components\forms\SearchForm.jsx, components\forms\index.js
 
# Create component/common files
New-Item -ItemType File -Path components\common\ErrorBoundary.jsx, components\common\ProtectedRoute.jsx, components\common\LoadingSpinner.jsx, components\common\ConfirmModal.jsx, components\common\NotFound.jsx, components\common\Unauthorized.jsx, components\common\index.js
 
# Create main component index file
New-Item -ItemType File -Path components\index.js
 
# Create pages/auth files
New-Item -ItemType File -Path pages\auth\Login.jsx, pages\auth\Register.jsx, pages\auth\ForgotPassword.jsx, pages\auth\ResetPassword.jsx, pages\auth\VerifyEmail.jsx, pages\auth\index.js
 
# Create pages/dashboard files
New-Item -ItemType File -Path pages\dashboard\Dashboard.jsx, pages\dashboard\AdminDashboard.jsx, pages\dashboard\UserDashboard.jsx, pages\dashboard\PatientDashboard.jsx, pages\dashboard\index.js
 
# Create pages/patients files
New-Item -ItemType File -Path pages\patients\PatientList.jsx, pages\patients\PatientDetails.jsx, pages\patients\AddPatient.jsx, pages\patients\EditPatient.jsx, pages\patients\PatientProfile.jsx, pages\patients\index.js
 
# Create pages/users files
New-Item -ItemType File -Path pages\users\UserList.jsx, pages\users\UserDetails.jsx, pages\users\AddUser.jsx, pages\users\EditUser.jsx, pages\users\UserProfile.jsx, pages\users\index.js
 
# Create main pages index file
New-Item -ItemType File -Path pages\index.js
 
# Create store/actions files
New-Item -ItemType File -Path store\actions\authActions.js, store\actions\patientActions.js, store\actions\userActions.js, store\actions\uiActions.js, store\actions\dashboardActions.js, store\actions\actionTypes.js, store\actions\index.js
 
# Create store/reducers files
New-Item -ItemType File -Path store\reducers\authReducer.js, store\reducers\patientReducer.js, store\reducers\userReducer.js, store\reducers\uiReducer.js, store\reducers\dashboardReducer.js, store\reducers\rootReducer.js, store\reducers\index.js
 
# Create store/middleware files
New-Item -ItemType File -Path store\middleware\authMiddleware.js, store\middleware\apiMiddleware.js, store\middleware\errorMiddleware.js, store\middleware\loggerMiddleware.js, store\middleware\index.js
 
# Create main store files
New-Item -ItemType File -Path store\store.js, store\index.js
 
# Create service files
New-Item -ItemType File -Path services\api.js, services\authService.js, services\patientService.js, services\userService.js, services\dashboardService.js, services\uploadService.js, services\index.js
 
# Create utility files
New-Item -ItemType File -Path utils\constants.js, utils\validators.js, utils\helpers.js, utils\formatters.js, utils\storage.js, utils\permissions.js, utils\dateUtils.js, utils\apiUtils.js, utils\index.js
 
# Create custom hook files
New-Item -ItemType File -Path hooks\useAuth.js, hooks\useApi.js, hooks\useLocalStorage.js, hooks\usePagination.js, hooks\useDebounce.js, hooks\useToggle.js, hooks\useForm.js, hooks\index.js
 
# Create style files
New-Item -ItemType File -Path styles\globals.css, styles\variables.css, styles\components.css, styles\utilities.css, styles\responsive.css, styles\theme.css, styles\bootstrap-overrides.css, styles\index.css
 
# Create placeholder files in asset folders
New-Item -ItemType File -Path assets\images\.gitkeep, assets\icons\.gitkeep, assets\fonts\.gitkeep
 
# Create main App files (if they don't exist)
New-Item -ItemType File -Path App.jsx, App.css, main.jsx -Force:$false
 
# Display success message
Write-Host ""
Write-Host "=====================================================" -ForegroundColor Green
Write-Host "   React Project Structure Created Successfully!" -ForegroundColor Green
Write-Host "=====================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Total files created:" -ForegroundColor Yellow
Write-Host "• Component files: 30+" -ForegroundColor Cyan
Write-Host "• Page files: 20+" -ForegroundColor Cyan
Write-Host "• Redux files: 15+" -ForegroundColor Cyan
Write-Host "• Service files: 7" -ForegroundColor Cyan
Write-Host "• Utility files: 9" -ForegroundColor Cyan
Write-Host "• Hook files: 8" -ForegroundColor Cyan
Write-Host "• Style files: 8" -ForegroundColor Cyan
Write-Host ""
Write-Host "Folder structure:" -ForegroundColor Yellow
Write-Host "src/" -ForegroundColor White
Write-Host "├── components/          # Reusable UI components" -ForegroundColor Gray
Write-Host "│   ├── ui/             # Basic UI components (11 files)" -ForegroundColor Gray
Write-Host "│   ├── layout/         # Layout components (6 files)" -ForegroundColor Gray
Write-Host "│   ├── forms/          # Form components (7 files)" -ForegroundColor Gray
Write-Host "│   └── common/         # Common components (7 files)" -ForegroundColor Gray
Write-Host "├── pages/              # Page components" -ForegroundColor Gray
Write-Host "│   ├── auth/           # Authentication pages (6 files)" -ForegroundColor Gray
Write-Host "│   ├── dashboard/      # Dashboard pages (5 files)" -ForegroundColor Gray
Write-Host "│   ├── patients/       # Patient CRUD pages (6 files)" -ForegroundColor Gray
Write-Host "│   └── users/          # User management pages (6 files)" -ForegroundColor Gray
Write-Host "├── store/              # Redux store" -ForegroundColor Gray
Write-Host "│   ├── actions/        # Redux actions (7 files)" -ForegroundColor Gray
Write-Host "│   ├── reducers/       # Redux reducers (7 files)" -ForegroundColor Gray
Write-Host "│   └── middleware/     # Custom middleware (5 files)" -ForegroundColor Gray
Write-Host "├── services/           # API services (7 files)" -ForegroundColor Gray
Write-Host "├── utils/              # Helper functions (9 files)" -ForegroundColor Gray
Write-Host "├── hooks/              # Custom React hooks (8 files)" -ForegroundColor Gray
Write-Host "├── styles/             # CSS files (8 files)" -ForegroundColor Gray
Write-Host "└── assets/             # Images, fonts, etc." -ForegroundColor Gray
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Install dependencies: npm install" -ForegroundColor White
Write-Host "2. Add Bootstrap and Font Awesome CDN to index.html" -ForegroundColor White
Write-Host "3. Start coding your components!" -ForegroundColor White
Write-Host ""
Write-Host "=====================================================" -ForegroundColor Green
 
# Show directory tree (optional)
Write-Host ""
Write-Host "Directory structure created:" -ForegroundColor Green
Get-ChildItem -Recurse -Directory | Select-Object FullName
